webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about.module",
		"common"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components.module",
		"common"
	],
	"./directives/directives.module": [
		"./src/app/directives/directives.module.ts",
		"directives.module",
		"common"
	],
	"./form/form.module": [
		"./src/app/form/form.module.ts",
		"form.module",
		"common"
	],
	"./pipes/pipes.module": [
		"./src/app/pipes/pipes.module.ts",
		"pipes.module",
		"common"
	],
	"./services/services.module": [
		"./src/app/services/services.module.ts",
		"services.module",
		"common"
	],
	"./themes/themes.module": [
		"./src/app/themes/themes.module.ts",
		"themes.module",
		"common"
	],
	"./uikits/uikits.module": [
		"./src/app/uikits/uikits.module.ts",
		"uikits.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
        this.subscribeRouterChange();
    }
    /**
     * 订阅路由变化
     */
    AppComponent.prototype.subscribeRouterChange = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.actRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; }) // 过滤出未命名的outlet，<router-outlet>
            .subscribe(function (event) {
            {
                if (document.documentElement) {
                    document.documentElement.scrollTop = 0;
                }
                else if (document.body) {
                    document.body.scrollTop = 0;
                }
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");



var routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full', data: { title: '登录' } },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__["a" /* SigninComponent */], data: { title: '登录' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */], data: { title: '首页' },
        children: [
            { path: 'about', loadChildren: './about/about.module#AboutModule', data: { title: '关于' } },
            { path: 'services', loadChildren: './services/services.module#ServicesModule', data: { title: '服务' } },
            { path: 'components', loadChildren: './components/components.module#ComponentsModule', data: { title: '组件' } },
            { path: 'directives', loadChildren: './directives/directives.module#DirectivesModule', data: { title: '指令' } },
            { path: 'pipes', loadChildren: './pipes/pipes.module#PipesModule', data: { title: '管道' } },
            { path: 'UIKits', loadChildren: './uikits/uikits.module#UIKitsModule', data: { title: 'UIKits' } },
            { path: 'form', loadChildren: './form/form.module#FormModule', data: { title: '表单' } },
            { path: 'themes', loadChildren: './themes/themes.module#ThemesModule', data: { title: '主题' } },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', data: { title: '图表' } }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_setting_service__ = __webpack_require__("./src/app/core/services/setting/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_themes_themes_service__ = __webpack_require__("./src/app/core/services/themes/themes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_themesController_module__ = __webpack_require__("./src/app/shared/modules/themesController.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dolphinng__ = __webpack_require__("./src/dolphinng.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["j" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["m" /* NavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["c" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["j" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["m" /* NavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_dolphinng__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_themesController_module__["a" /* ThemesControllerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_setting_setting_service__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_3__services_themes_themes_service__["a" /* ThemesService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/core.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeClass; });
/**
 * 工具函数
 */
/**
 * 为元素添加一个类
 * @param elem
 * @param className
 */
var addClass = function (elem, className) {
    var classList = elem.className.split(/\s+/);
    if (classList.indexOf(className) < 0) {
        classList.push(className);
        elem.className = classList.join(' ');
    }
};
/**
 * 删除某个类
 * @param elem
 * @param className
 */
var removeClass = function (elem, className) {
    var classList = elem.className.split(/\s+/);
    var clsIndex = classList.indexOf(className);
    if (clsIndex >= 0) {
        classList.splice(clsIndex, 1);
        elem.className = classList.join(' ');
    }
};


/***/ }),

/***/ "./src/app/core/services/setting/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingService = /** @class */ (function () {
    function SettingService() {
        var _this = this;
        this.init();
        var localSettingStr = localStorage.getItem('setting');
        var localSetting;
        try {
            localSetting = JSON.parse(localSettingStr);
            for (var o in localSetting) {
                this[o] = localSetting[o];
            }
        }
        catch (err) {
            console.log(err);
        }
        window.addEventListener('beforeunload', function () {
            var setting = {
                headerFixed: _this.headerFixed,
                asideFixed: _this.asideFixed,
                asideFolded: _this.asideFolded,
                asideDock: _this.asideDock,
                offScreen: _this.offScreen,
                headerTheme: _this.headerTheme,
                headerLeftTheme: _this.headerLeftTheme,
                headerRightTheme: _this.headerRightTheme,
                asideLeftTheme: _this.asideLeftTheme,
            };
            localStorage.setItem('setting', JSON.stringify(setting));
        });
    }
    SettingService.prototype.init = function () {
        this.headerFixed = true;
        this.asideFixed = true;
        this.asideFolded = false;
        this.asideDock = false;
        this.container = false;
        this.offScreen = false;
        this.headerTheme = '';
        this.headerLeftTheme = 'black';
        this.headerRightTheme = 'black';
        this.asideLeftTheme = 'black';
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/core/services/themes/themes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__("./src/app/core/core.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemesService = /** @class */ (function () {
    function ThemesService() {
        var _this = this;
        this.skins = [{
                value: 'black',
                name: '黑色'
            }, {
                value: 'dol',
                name: 'dol'
            }, {
                value: 'deep-blue',
                name: '深蓝'
            }];
        this.skin = '';
        this.themes = {
            asideLeft: '',
            header: '',
            headerLeft: '',
            headerRight: '' //black(默认),cerulean
        };
        var localThemesStr = localStorage.getItem('themes');
        var themesService;
        try {
            themesService = JSON.parse(localThemesStr);
            if (themesService && typeof themesService === 'object') {
                themesService.skin && (this.skin = themesService.skin);
                if (themesService.themes) {
                    for (var o in themesService.themes) {
                        if (themesService.themes[o]) {
                            this.themes[o] = themesService.themes[o];
                        }
                    }
                }
            }
            this.setSkin(themesService.skin || '');
        }
        catch (err) {
            console.log(err);
        }
        window.addEventListener('beforeunload', function () {
            var themes = {
                skin: _this.skin || '',
                themes: {
                    asideLeft: _this.themes.asideLeft,
                    headerLeft: _this.themes.headerLeft,
                    headerRight: _this.themes.headerRight
                }
            };
            localStorage.setItem('themes', JSON.stringify(themes));
        });
        this.init();
    }
    ThemesService.prototype.init = function () {
        this.setSkin(this.skin);
    };
    ThemesService.prototype.setSkin = function (skinName) {
        this.clearSkin();
        this.skin = skinName;
        if (this.skin) {
            Object(__WEBPACK_IMPORTED_MODULE_1__core_utils__["a" /* addClass */])(document.body, this.skin); //添加类
        }
        var val = this.skin;
        if (val === 'black') {
            this.themes.header = 'black'; //black
            this.themes.headerLeft = 'black'; //black
            this.themes.headerRight = 'black'; //black
            this.themes.asideLeft = 'black'; //black
        }
        else if (val === 'dol') {
            this.themes.header = 'cerulean';
            this.themes.headerLeft = '';
            this.themes.headerRight = '';
            this.themes.asideLeft = 'cerulean-outline';
        }
        else if (val === '') {
            this.themes.header = 'black';
            this.themes.headerLeft = '';
            this.themes.headerRight = '';
            this.themes.asideLeft = '';
        }
        else {
            this.themes.header = ''; //black
            this.themes.headerLeft = ''; //black
            this.themes.headerRight = ''; //black
            this.themes.asideLeft = ''; //black
        }
    };
    ThemesService.prototype.clearSkin = function () {
        this.skin = '';
        for (var _i = 0, _a = this.skins; _i < _a.length; _i++) {
            var o = _a[_i];
            Object(__WEBPACK_IMPORTED_MODULE_1__core_utils__["b" /* removeClass */])(document.body, o.value);
        }
    };
    ThemesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThemesService);
    return ThemesService;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<root-container [headerFixed]=\"setting.headerFixed\" [asideFixed]=\"setting.asideFixed\" [asideFolded]=\"setting.asideFolded\" [asideDock]=\"setting.asideDock\" [container]=\"setting.container\" [offScreen]=\"setting.offScreen\">\n    <header [theme]=\"themesSvc.themes.header\">\n        <ng-container *ngTemplateOutlet=\"header\">\n        </ng-container>\n    </header>\n    <ng-container *ngTemplateOutlet=\"asideLeft\">\n    </ng-container>\n    <div class=\"app-content\">\n        <router-outlet></router-outlet>\n    </div>\n</root-container>\n<ng-template #header>\n    <ng-container *ngIf=\"themesSvc.skin==='black'||!themesSvc.skin\">\n        <header-left [theme]=\"themesSvc.themes.headerLeft\">\n            <button class=\"pull-right visible-xs\" (click)=\"headerRight.toggleDropDown()\">\n                            <i class=\"glyphicon glyphicon-cog\"></i>\n                    </button>\n            <button class=\"pull-right visible-xs\" (click)=\"toggleOffScreen()\">\n                <i class=\"glyphicon glyphicon-align-justify\"></i>\n              </button>\n            <a class=\"navbar-brand text-lt\">\n                <i class=\"fa fa-btc logo\"></i>\n                <span class=\"hidden-folded m-l-xs ng-binding\">Angular</span>\n            </a>\n        </header-left>\n        <header-right [theme]=\"themesSvc.themes.headerRight\" #headerRight>\n            <div class=\"nav navbar-nav hidden-xs\" (click)=\"toggleAsideFolded()\">\n                <a class=\"btn no-shadow navbar-btn\">\n                    <i class=\"fa fa-fw\" [ngClass]=\"{'fa-dedent':!setting.asideFolded,'fa-indent':setting.asideFolded}\"></i>\n                </a>\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown hidden-sm\" toggleClass=\"open\" [opt-revokable]=\"true\">\n                    <a class=\"dropdown-toggle ng-binding\">\n                    English <b class=\"caret\"></b>\n                  </a>\n                    <!-- dropdown -->\n                    <ul class=\"dropdown-menu animated fadeInRight w\">\n                        <li>\n                            <a href=\"\">German</a>\n                        </li>\n                        <li>\n                            <a href=\"\">English</a>\n                        </li>\n                        <li>\n                            <a>Italian</a>\n                        </li>\n                    </ul>\n                    <!-- / dropdown -->\n                </li>\n                <li class=\"hidden-xs\">\n                    <a *ngIf=\"!isFullScreen\" (click)=fullScreen()><i class=\"fa fa-expand fa-fw text\" ></i><i class=\"fa fa-compress fa-fw text-active\"></i></a>\n                    <a *ngIf=\"isFullScreen\" (click)=cancelFullScreen()><i class=\"fa fa-compress fa-fw text\" ></i><i class=\"fa fa-compress fa-fw text-active\"></i></a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"\" class=\"dropdown-toggle\">\n                        <i class=\"icon-bell fa-fw\"></i>\n                        <span class=\"visible-xs-inline\">Notifications</span>\n                        <span class=\"badge badge-sm up bg-danger pull-right-xs\">2</span>\n                    </a>\n                    <!-- dropdown -->\n                    <div class=\"dropdown-menu w-xl animated fadeInUp\">\n                        <div class=\"panel bg-white\">\n                            <div class=\"panel-heading b-light bg-light\">\n                                <strong>You have <span>2</span> notifications</strong>\n                            </div>\n                            <div class=\"list-group\">\n                                <a href=\"\" class=\"media list-group-item\">\n                                    <span class=\"pull-left thumb-sm\">\n                              <img src=\"\" alt=\"...\" class=\"img-circle\">\n                            </span>\n                                    <span class=\"media-body block m-b-none\">\n                              Use awesome animate.css<br>\n                              <small class=\"text-muted\">10 minutes ago</small>\n                            </span>\n                                </a>\n                                <a href=\"\" class=\"media list-group-item\">\n                                    <span class=\"media-body block m-b-none\">\n                              1.0 initial released<br>\n                              <small class=\"text-muted\">1 hour ago</small>\n                            </span>\n                                </a>\n                            </div>\n                            <div class=\"panel-footer text-sm\">\n                                <a href=\"\" class=\"pull-right\"><i class=\"fa fa-cog\"></i></a>\n                                <a href=\"\" data-toggle=\"class:show animated fadeInRight\">See all the notifications</a>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- / dropdown -->\n                </li>\n                <li class=\"dropdown\" toggleClass=\"open\" [opt-revokable]=\"true\">\n                    <a class=\"dropdown-toggle clear\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm\">\n                        <img src=\"./assets/img/a0.jpg\" alt=\"...\">\n                        <i class=\"on md b-white bottom\"></i>\n                      </span>\n                        <span class=\"hidden-sm hidden-md\">John.Smith</span> <b class=\"caret\"></b>\n                    </a>\n                    <!-- dropdown -->\n                    <ul class=\"dropdown-menu animated fadeInRight w\">\n                        <li class=\"wrapper b-b m-b-sm bg-light m-t-n-xs\">\n                            <div>\n                                <p>300mb of 500mb used</p>\n                            </div>\n                            <div class=\"progress-xs m-b-none bg-white progress ng-isolate-scope\" value=\"60\">\n                                <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n                            </div>\n                        </li>\n                        <li>\n                            <a>\n                                <span class=\"badge bg-danger pull-right\">30%</span>\n                                <span>Settings</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a>Profile</a>\n                        </li>\n                        <li>\n                            <a>\n                                <span class=\"label bg-info pull-right\">new</span> Help\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <a>Logout</a>\n                        </li>\n                    </ul>\n                    <!-- / dropdown -->\n                </li>\n            </ul>\n        </header-right>\n    </ng-container>\n    <ng-container *ngIf=\"themesSvc.skin==='dol'\">\n        <a class=\"sys-name hidden-xs\" routerLink=\"/home\">\n        </a>\n        <a class=\"btn-toggle-aside\" (click)=\"toggleOffScreen()\">\n            <i class=\"fa fa-reorder\"></i>\n        </a>\n        <a class=\"sys-name-xs\" routerLink=\"/home\">金融服务管理平台</a>\n        <div class=\"dropdown user-box\" toggleClass=\"open\" [opt-revokable]=\"true\">\n            <a class=\"dropdown-toggle clear\">\n                <i class=\"fa fa-user pad-r-xxs\"></i><span class=\"hidden-xs\">用户名</span> <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu animated fadeInRight w pad-r-xs\">\n                <li>\n                    <a>\n                        <span class=\"label bg-info pull-right\"></span> 修改密码\n                    </a>\n                    <a>\n                        <span class=\"label bg-info pull-right\"></span> 修改审核口令\n                    </a>\n                </li>\n                <li>\n                    <a routerLink=\"/signin\">退出登录</a>\n                </li>\n            </ul>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"themesSvc.skin==='deep-blue'\">\n        <a class=\"sys-name hidden-xs\" routerLink=\"/home\">\n                物流供应链金融管理平台\n            </a>\n        <a class=\"btn-toggle-aside\" (click)=\"toggleOffScreen()\">\n            <i class=\"fa fa-reorder\"></i>\n        </a>\n        <a class=\"sys-name-xs\" routerLink=\"/home\">物流供应链金融管理平台</a>\n        <div class=\"dropdown user-box\" toggleClass=\"open\" [opt-revokable]=\"true\">\n            <a class=\"dropdown-toggle clear\">\n                <i class=\"fa fa-user pad-r-xxs\"></i><span class=\"hidden-xs\">用户名</span> <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu animated fadeInRight w pad-r-xs\">\n                <li>\n                    <a>\n                        <span class=\"label bg-info pull-right\"></span> 修改密码\n                    </a>\n                    <a>\n                        <span class=\"label bg-info pull-right\"></span> 修改审核口令\n                    </a>\n                </li>\n                <li>\n                    <a routerLink=\"/signin\">退出登录</a>\n                </li>\n            </ul>\n        </div>\n    </ng-container>\n</ng-template>\n<ng-template #asideLeft>\n    <aside-left [theme]=\"themesSvc.themes.asideLeft\">\n        <nav-wrap>\n            <nav-item icon=\"glyphicon glyphicon-list-alt\" text=\"关于\">\n                <sub-nav-item text=\"说明\" link=\"/about/explanation\"></sub-nav-item>\n                <sub-nav-item text=\"约定\" link=\"/about/convention\"></sub-nav-item>\n                <sub-nav-item text=\"项目构建\" link=\"/about/build\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"glyphicon glyphicon-exclamation-sign\" text=\"服务\">\n                <sub-nav-item text=\"popup\" link=\"/services/popup\"></sub-nav-item>\n                <sub-nav-item text=\"toaster\" link=\"/services/toaster\"></sub-nav-item>\n                <sub-nav-item text=\"tracert\" link=\"/services/tracert\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"glyphicon glyphicon-copyright-mark\" text=\"组件\">\n                <sub-nav-item text=\"Modal\" link=\"/components/modalDemo\"></sub-nav-item>\n                <sub-nav-item text=\"DatetimePicker\" link=\"/components/datetimePickerDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Paginator\" link=\"/components/paginatorDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Layout\" link=\"/components/layoutComponents\"></sub-nav-item>\n                <!--<sub-nav-item text=\"左侧菜单\" link=\"/components/navComponents\">-->\n                <sub-nav-item text=\"左侧菜单\" link=\"/components/navComponents\">\n                </sub-nav-item>\n                <sub-nav-item text=\"Spinner\" link=\"/components/spinnerDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Slider\" link=\"/components/sliderDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Gallery\" link=\"/components/galleryDemo\"></sub-nav-item>\n                <sub-nav-item text=\"文件上传\" link=\"/components/uploaderDemo\"></sub-nav-item>\n                <sub-nav-item text=\"SlideDown\" link=\"/components/slideDownDemo\"></sub-nav-item>\n                <sub-nav-item text=\"DeleteWrap\" link=\"/components/deleteWrapDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Checkbox\" link=\"/components/checkboxDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Radio\" link=\"/components/radioDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Switch\" link=\"/components/switchDemo\"></sub-nav-item>\n                <sub-nav-item text=\"Select\" link=\"/components/selectDemo\"></sub-nav-item>\n                <!--<sub-nav-item text=\"搜索框\" link=\"/components/searchbarDemo\"></sub-nav-item>-->\n            </nav-item>\n            <nav-item icon=\"fa fa-exchange\" text=\"管道\">\n                <sub-nav-item text=\"日期时间\" link=\"/pipes/date\"></sub-nav-item>\n                <sub-nav-item text=\"货币\" link=\"/pipes/currency\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"glyphicon glyphicon-barcode\" text=\"指令\" badge-value=\"5\" badge-class=\"badge bg-info\">\n                <sub-nav-item text=\"地区选择\" link=\"/directives/areaPickerDemo\"></sub-nav-item>\n                <sub-nav-item text=\"输入金额格式化\" link=\"/directives/currencyFormatDemo\"></sub-nav-item>\n                <sub-nav-item text=\"HTML5校验\" link=\"/directives/HTML5ValidateDemo\"></sub-nav-item>\n                <sub-nav-item text=\"文字最大长度\" link=\"/directives/textMaxLengthDemo\"></sub-nav-item>\n                <sub-nav-item text=\"toggleClass\" link=\"/directives/toggleClassDemo\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"glyphicon glyphicon-briefcase icon\" text=\"UIKits\">\n                <sub-nav-item text=\"字体图标\" link=\"/UIKits/iconfonts\"></sub-nav-item>\n                <sub-nav-item text=\"按钮\" link=\"/UIKits/buttons\"></sub-nav-item>\n                <sub-nav-item text=\"栅格系统\" link=\"/UIKits/grid\"></sub-nav-item>\n                <sub-nav-item text=\"小部件\" link=\"/UIKits/widgets\"></sub-nav-item>\n                <sub-nav-item text=\"时间线\" link=\"/UIKits/timeline\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"glyphicon glyphicon-edit\" text=\"表单\">\n                <sub-nav-item text=\"elements\" link=\"/form/elements\"></sub-nav-item>\n            </nav-item>\n            <nav-item icon=\"fa fa-bar-chart-o\" text=\"图表\" link=\"/charts\"></nav-item>\n            <nav-item icon=\"fa fa-cog\" text=\"主题/皮肤\" link=\"/themes\"></nav-item>\n        </nav-wrap>\n    </aside-left>\n</ng-template>\n<themes-controller></themes-controller>"

/***/ }),

/***/ "./src/app/index/index.component.less":
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  padding: 0 16px;\n  font-size: 18px;\n}\n.sys-name {\n  display: block;\n  height: 80px;\n  padding-left: 24px;\n  line-height: 80px;\n  font-size: 24px;\n}\n/deep/ .dol .sys-name {\n  width: 280px;\n  background: url('bg_sys_name.64547a54b5d0172a4e86.png') no-repeat;\n  background-position: 50% 50%;\n}\n.btn-toggle-aside {\n  height: 100%;\n  font-size: 24px;\n  line-height: 90px;\n  cursor: pointer;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: none;\n}\n.sys-name-xs {\n  display: none;\n  font-size: 18px;\n  font-weight: bold;\n  height: 100%;\n  line-height: 80px;\n  color: #fff;\n  position: relative;\n  top: -2px;\n}\n@media (max-width: 767px) {\n  .btn-toggle-aside {\n    display: inline-block;\n  }\n  .sys-name-xs {\n    display: inline-block;\n  }\n}\n.footer {\n  height: 50px;\n  position: absolute;\n  left: 200px;\n  right: 0;\n  top: 100%;\n}\n.footer .copyright {\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  line-height: 50px;\n}\n.app-aside-folded .footer {\n  left: 60px;\n}\n@media (max-width: 768px) {\n  .footer {\n    position: static;\n    left: 0;\n  }\n}\n.pad-r-xxs {\n  padding-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_setting_setting_service__ = __webpack_require__("./src/app/core/services/setting/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_themes_themes_service__ = __webpack_require__("./src/app/core/services/themes/themes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(setting, themesSvc, router, actRoute) {
        this.setting = setting;
        this.themesSvc = themesSvc;
        this.router = router;
        this.actRoute = actRoute;
        this.isFullScreen = false;
        this.messageCount = 0;
        this.user = {
            username: '用户名',
            avatar: ''
        };
        this.subscribeRouterChange();
    }
    /**
   * 订阅路由变化
   */
    IndexComponent.prototype.subscribeRouterChange = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.actRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; }) // 过滤出未命名的outlet，<router-outlet>
            .subscribe(function (event) {
            setTimeout(function () {
                _this.setting.offScreen = false;
            }, 500);
        });
    };
    IndexComponent.prototype.toggleAsideFolded = function () {
        this.setting.asideFolded = !this.setting.asideFolded;
    };
    IndexComponent.prototype.toggleOffScreen = function () {
        this.setting.offScreen = !this.setting.offScreen;
    };
    IndexComponent.prototype.openContent = function () {
        this.setting.offScreen = false;
    };
    IndexComponent.prototype.fullScreen = function () {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        else if (docElm['mozRequestFullScreen']) {
            docElm['mozRequestFullScreen']();
        }
        else if (docElm['webkitRequestFullScreen']) {
            docElm['webkitRequestFullScreen']();
        }
        else if (docElm['msRequestFullscreen']) {
            docElm['msRequestFullscreen']();
        }
        this.isFullScreen = true;
    };
    IndexComponent.prototype.cancelFullScreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        }
        else if (document['webkitCancelFullScreen']) {
            document['webkitCancelFullScreen']();
        }
        else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
        this.isFullScreen = false;
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_setting_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_themes_themes_service__["a" /* ThemesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/themes-controller/themes-controller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"themes-ctrl\" [style.right.px]=\"visible?0:-150\" #wrap >\n  <div class=\"themes-ctrl-switch\" title=\"皮肤/主题\"\n       (click)=\"toggleVisible()\"\n  ><i class=\"fa fa-cog\"></i></div>\n\n  <div class=\"themes-ctrl-tabs\">\n    <div class=\"themes-ctrl-tab-item\" (click)=\"changeTab(0)\" [class.active]=\"tabIndex==0\">皮肤</div>\n    <div class=\"themes-ctrl-tab-item\" (click)=\"changeTab(1)\" [class.active]=\"tabIndex==1\">主题</div>\n  </div>\n  <div class=\"themes-ctrl-tab-content\" *ngIf=\"tabIndex==0\">\n    <ul>\n      <li (click)=\"setSkin('')\" class=\"cur-poi pad-xs\">\n        <radio [(key)]=\"themesSvc.skin\" value=\"\" >默认</radio>\n      </li>\n      <li  class=\"cur-poi pad-xs\" *ngFor=\"let skins of themesSvc.skins\" (click)=\"setSkin(skins.value)\">\n        <radio [(key)]=\"themesSvc.skin\" value={{skins.value}}>{{skins.name}}</radio>\n      </li>\n    </ul>\n  </div>\n  <div class=\"themes-ctrl-tab-content\" *ngIf=\"tabIndex==1\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/themes-controller/themes-controller.component.less":
/***/ (function(module, exports) {

module.exports = ".themes-ctrl {\n  position: fixed;\n  width: 150px;\n  height: 300px;\n  background-color: #fff;\n  top: 0;\n  right: -150px;\n  bottom: 0;\n  margin: auto;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 1px #aaa;\n          box-shadow: 0 1px 1px #aaa;\n  -webkit-transition: right 0.3s ease-in-out;\n  transition: right 0.3s ease-in-out;\n}\n.themes-ctrl-switch {\n  display: block;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  line-height: 36px;\n  position: absolute;\n  left: -36px;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  font-size: 24px;\n  color: #fff;\n}\n.themes-ctrl-switch i {\n  -webkit-animation: spinner 3s linear infinite;\n          animation: spinner 3s linear infinite;\n  display: block;\n  line-height: 36px;\n}\n.themes-ctrl-switch:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.themes-ctrl-switch:hover i {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.themes-ctrl-switch:active {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.themes-ctrl-tabs {\n  line-height: 36px;\n  border-bottom: 1px solid #ddd;\n  background-color: #fafafa;\n}\n.themes-ctrl-tabs .themes-ctrl-tab-item {\n  float: left;\n  padding: 0 10px;\n  cursor: pointer;\n  position: relative;\n  top: 1px;\n}\n.themes-ctrl-tabs .themes-ctrl-tab-item:hover {\n  background-color: #fff;\n}\n.themes-ctrl-tabs .themes-ctrl-tab-item.active {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: #fff;\n  border-top: none;\n}\n.themes-ctrl-tabs .themes-ctrl-tab-item:first-child.active {\n  border-left: none;\n}\n.themes-ctrl-tabs:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/themes-controller/themes-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_themes_themes_service__ = __webpack_require__("./src/app/core/services/themes/themes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemesControllerComponent = /** @class */ (function () {
    function ThemesControllerComponent(themesSvc) {
        this.themesSvc = themesSvc;
        this.visible = false;
        this.tabIndex = 0;
    }
    ThemesControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outClickHandler = function (ev) {
            _this.visible = false;
        };
        window.addEventListener('click', this.outClickHandler);
        if (this.wrap && this.wrap.nativeElement) {
            this.wrap.nativeElement.addEventListener('click', function (ev) {
                ev.stopPropagation();
            });
        }
    };
    ThemesControllerComponent.prototype.ngOnChanges = function (changes) {
    };
    ThemesControllerComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('click', this.outClickHandler);
    };
    ThemesControllerComponent.prototype.changeTab = function (index) {
        this.tabIndex = index;
    };
    ThemesControllerComponent.prototype.toggleVisible = function () {
        this.visible = !this.visible;
    };
    ThemesControllerComponent.prototype.setSkin = function (val) {
        this.themesSvc.setSkin(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('wrap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ThemesControllerComponent.prototype, "wrap", void 0);
    ThemesControllerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'themes-controller',
            template: __webpack_require__("./src/app/shared/components/themes-controller/themes-controller.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/themes-controller/themes-controller.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_themes_themes_service__["a" /* ThemesService */]])
    ], ThemesControllerComponent);
    return ThemesControllerComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/themesController.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesControllerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_themes_controller_themes_controller_component__ = __webpack_require__("./src/app/shared/components/themes-controller/themes-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dolphinng__ = __webpack_require__("./src/dolphinng.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThemesControllerModule = /** @class */ (function () {
    function ThemesControllerModule() {
    }
    ThemesControllerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_dolphinng__["h" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_themes_controller_themes_controller_component__["a" /* ThemesControllerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_dolphinng__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_themes_controller_themes_controller_component__["a" /* ThemesControllerComponent */]
            ]
        })
    ], ThemesControllerModule);
    return ThemesControllerModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app ng-scope app-header-fixed\" id=\"app\"  ><!-- uiView:  -->\n  <div class=\"fade-in-right-big smooth ng-scope\">\n  <div class=\"container w-xxl w-auto-xs ng-scope\"  >\n  <a href=\"/about/explanation\" class=\"navbar-brand block m-t ng-binding\">Angular</a>\n  <div class=\"m-b-lg\">\n    <div class=\"wrapper text-center\">\n      <strong>Sign in to get in touch</strong>\n    </div>\n    <form name=\"form\" class=\"form-validation ng-pristine ng-valid-email ng-invalid ng-invalid-required\">\n      <div class=\"text-danger wrapper text-center ng-binding ng-hide\" >\n\n      </div>\n      <div class=\"list-group list-group-sm\">\n        <div class=\"list-group-item\">\n          <input type=\"email\" placeholder=\"Email\"  class=\"form-control no-border\" required>\n        </div>\n        <div class=\"list-group-item\">\n          <input type=\"password\" placeholder=\"Password\"  class=\"form-control no-border\" required>\n        </div>\n </div>\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" routerLink=\"/about/explanation\">Log in</button>\n      <div class=\"text-center m-t m-b\"><a >Forgot password?</a></div>\n      <div class=\"line line-dashed\"></div>\n      <p class=\"text-center\"><small>Do not have an account?</small></p>\n      <a  class=\"btn btn-lg btn-default btn-block\" >Create an account</a>\n    </form>\n  </div>\n  <!-- ngInclude: 'tpl/blocks/page_footer.html' --><div class=\"text-center ng-scope\" ><p class=\"ng-scope\">\n  <small class=\"text-muted\">Web app framework base on Bootstrap and AngularJS<br>© 2014</small>\n</p></div>\n</div></div></div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'signin',
            template: __webpack_require__("./src/app/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/signin/signin.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/dolphinng.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__ = __webpack_require__("./src/packages/dolphinng/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_dolphinng_index__["z"]; });



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./src/packages/dolphinng/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_q_btn_group_q_btn_group_component__ = __webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_q_btn_group_q_btn_group_module__ = __webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_paginator_paginator_component__ = __webpack_require__("./src/packages/dolphinng/src/paginator/paginator.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_paginator_paginator_module__ = __webpack_require__("./src/packages/dolphinng/src/paginator/paginator.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__src_paginator_paginator_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_gallery_gallery_component__ = __webpack_require__("./src/packages/dolphinng/src/gallery/gallery.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_gallery_gallery_module__ = __webpack_require__("./src/packages/dolphinng/src/gallery/gallery.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__src_gallery_gallery_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_spinner_spinner_component__ = __webpack_require__("./src/packages/dolphinng/src/spinner/spinner.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_spinner_loader_module__ = __webpack_require__("./src/packages/dolphinng/src/spinner/loader.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__src_spinner_loader_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_checkbox_checkbox_component__ = __webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_checkbox_checkbox_module__ = __webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_radio_radio_component__ = __webpack_require__("./src/packages/dolphinng/src/radio/radio.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_radio_radio_module__ = __webpack_require__("./src/packages/dolphinng/src/radio/radio.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_toggle_toggle_component__ = __webpack_require__("./src/packages/dolphinng/src/toggle/toggle.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_toggle_toggle_module__ = __webpack_require__("./src/packages/dolphinng/src/toggle/toggle.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_switch_switch_component__ = __webpack_require__("./src/packages/dolphinng/src/switch/switch.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_switch_switch_module__ = __webpack_require__("./src/packages/dolphinng/src/switch/switch.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_15__src_switch_switch_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_modal_modal_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_modal_modal_module__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_17__src_modal_modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_layout_root_container_root_container_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/root-container/root-container.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_layout_aside_left_aside_left_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/aside-left/aside-left.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_layout_header_header_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/header/header.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_layout_delete_wrap_delete_wrap_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_layout_layout_module__ = __webpack_require__("./src/packages/dolphinng/src/layout/layout.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_22__src_layout_layout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_nav_nav_wrap_nav_wrap_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_nav_nav_item_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/nav-item/nav-item.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_nav_sub_nav_item_sub_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_nav_thirth_nav_item_thirth_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_nav_nav_module__ = __webpack_require__("./src/packages/dolphinng/src/nav/nav.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_27__src_nav_nav_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_datetime_picker_datetime_picker_component__ = __webpack_require__("./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_datetime_picker_datetime_picker_module__ = __webpack_require__("./src/packages/dolphinng/src/datetime-picker/datetime-picker.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_29__src_datetime_picker_datetime_picker_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_drop_down_drop_down_component__ = __webpack_require__("./src/packages/dolphinng/src/drop-down/drop-down.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_drop_down_drop_down_module__ = __webpack_require__("./src/packages/dolphinng/src/drop-down/drop-down.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_31__src_drop_down_drop_down_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_slide_down_slide_down_component__ = __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_slide_down_slide_down_module__ = __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_33__src_slide_down_slide_down_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_slider_slider_component__ = __webpack_require__("./src/packages/dolphinng/src/slider/slider.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_slider_slider_module__ = __webpack_require__("./src/packages/dolphinng/src/slider/slider.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_35__src_slider_slider_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_select_select_component__ = __webpack_require__("./src/packages/dolphinng/src/select/select.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_select_select_Module__ = __webpack_require__("./src/packages/dolphinng/src/select/select.Module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_37__src_select_select_Module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_area_picker_area_picker_directive__ = __webpack_require__("./src/packages/dolphinng/src/area-picker/area-picker.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_area_picker_area_picker_module__ = __webpack_require__("./src/packages/dolphinng/src/area-picker/area-picker.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_39__src_area_picker_area_picker_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_area_picker_area_picker__ = __webpack_require__("./src/packages/dolphinng/src/area-picker/area-picker.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_40__src_area_picker_area_picker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_toggle_class_toggle_class_directive__ = __webpack_require__("./src/packages/dolphinng/src/toggle-class/toggle-class.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_toggle_class_toggle_class_module__ = __webpack_require__("./src/packages/dolphinng/src/toggle-class/toggle-class.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_btn_back_btn_back_directive__ = __webpack_require__("./src/packages/dolphinng/src/btn-back/btn-back.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_btn_back_btn_back_module__ = __webpack_require__("./src/packages/dolphinng/src/btn-back/btn-back.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_text_max_length_text_max_length_directive__ = __webpack_require__("./src/packages/dolphinng/src/text-max-length/text-max-length.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_text_max_length_text_max_length_module__ = __webpack_require__("./src/packages/dolphinng/src/text-max-length/text-max-length.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_46__src_text_max_length_text_max_length_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_validate_html5_validate_directive__ = __webpack_require__("./src/packages/dolphinng/src/validate/html5-validate.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_validate_validate_module__ = __webpack_require__("./src/packages/dolphinng/src/validate/validate.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_48__src_validate_validate_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_currency_format_currency_format_deirective__ = __webpack_require__("./src/packages/dolphinng/src/currency-format/currency-format.deirective.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_currency_format_currency_format_pipe__ = __webpack_require__("./src/packages/dolphinng/src/currency-format/currency-format.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__src_currency_format_currency_format_module__ = __webpack_require__("./src/packages/dolphinng/src/currency-format/currency-format.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_51__src_currency_format_currency_format_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__src_date_format_date_format_pipe__ = __webpack_require__("./src/packages/dolphinng/src/date-format/date-format.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__src_date_format_date_format_module__ = __webpack_require__("./src/packages/dolphinng/src/date-format/date-format.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_53__src_date_format_date_format_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__src_null_replace_null_replace_pipe__ = __webpack_require__("./src/packages/dolphinng/src/null-replace/null-replace.pipe.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__src_null_replace_null_replace_module__ = __webpack_require__("./src/packages/dolphinng/src/null-replace/null-replace.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__src_uploader_uploader_module__ = __webpack_require__("./src/packages/dolphinng/src/uploader/uploader.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_56__src_uploader_uploader_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__src_uploader_Uploader__ = __webpack_require__("./src/packages/dolphinng/src/uploader/Uploader.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_57__src_uploader_Uploader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__src_uploader_UploadFile__ = __webpack_require__("./src/packages/dolphinng/src/uploader/UploadFile.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__src_uploader_uploader_directive__ = __webpack_require__("./src/packages/dolphinng/src/uploader/uploader.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__src_forms_forms_module__ = __webpack_require__("./src/packages/dolphinng/src/forms/forms.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_60__src_forms_forms_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__src_common_common_module__ = __webpack_require__("./src/packages/dolphinng/src/common/common.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_61__src_common_common_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__src_services_popup_popup_service__ = __webpack_require__("./src/packages/dolphinng/src/services/popup/popup.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_62__src_services_popup_popup_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__src_services_pop_pop_service__ = __webpack_require__("./src/packages/dolphinng/src/services/pop/pop.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_63__src_services_pop_pop_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__src_services_toaster_toaster_service__ = __webpack_require__("./src/packages/dolphinng/src/services/toaster/toaster.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_64__src_services_toaster_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__src_services_tracert_tracert_service__ = __webpack_require__("./src/packages/dolphinng/src/services/tracert/tracert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_65__src_services_tracert_tracert_service__["a"]; });
//q-btn-group


//paginator


//gallery


//spinner


//checkbox


//radio


//toggle


//switch


//modal


//layout





//nav





//datetimePicker


//drop-down


//slide-down


//slider


//select


//areaPicker



//toggleClass


//btnBack


//textMaxLength


//validate


//currencyFormat



//date


//nullReplace


//uploader




//forms

//common

//service






/***/ }),

/***/ "./src/packages/dolphinng/src/area-picker/area-Picker.directive.less":
/***/ (function(module, exports) {

module.exports = " /deep/ .areaPicker {\n  position: absolute;\n  min-height: 120px;\n  max-width: 360px;\n  border: 1px solid #ddd;\n  background-color: #fff;\n  font-size: 14px;\n  opacity: 0;\n}\n /deep/ .areaPicker .areaPicker-header {\n  height: 32px;\n  width: 100%;\n  position: relative;\n  left: 0;\n  top: 0;\n  border-bottom: 1px solid #ddd;\n  background-color: #f5f5f5;\n  z-index: 1;\n}\n /deep/ .areaPicker .areaPicker-header:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n /deep/ .areaPicker .areaPicker-body {\n  padding: 12px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n /deep/ .areaPicker .areaPicker-body:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n /deep/ .areaPicker .areaPicker-header-item {\n  line-height: 31px;\n  text-align: center;\n  padding: 0 12px;\n  float: left;\n  border-right: 1px solid #ddd;\n  cursor: pointer;\n  color: #666;\n}\n /deep/ .areaPicker .areaPicker-header-item.active {\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n  background-color: #fff!important;\n  color: #333;\n}\n /deep/ .areaPicker .areaPicker-header-item:hover {\n  background-color: #fafafa;\n}\n /deep/ .areaPicker .areaPicker-header-item:last-child {\n  border-right: none;\n  margin-right: 10px;\n}\n /deep/ .areaPicker .areaPicker-header-item:last-child:hover {\n  border-right: 1px solid #ddd;\n}\n /deep/ .areaPicker .areaPicker-header-item.active:last-child {\n  border-right: 1px solid #ddd;\n}\n /deep/ .areaPicker .areaPicker-item {\n  margin-right: 8px;\n  line-height: 18px;\n  margin-bottom: 6px;\n  color: #666;\n  cursor: pointer;\n  float: left;\n}\n /deep/ .areaPicker .areaPicker-item:hover {\n  color: #000;\n}\n /deep/ .areaPicker .areaPicker-loader {\n  display: block;\n  color: #999;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/area-picker/area-picker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_picker__ = __webpack_require__("./src/packages/dolphinng/src/area-picker/area-picker.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*@Directive({
  selector: '[areaPicker]'
})*/
var AreaPickerDirective = /** @class */ (function () {
    function AreaPickerDirective(elemRef) {
        this.elemRef = elemRef;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.handlers = []; //事件处理函数，存储临时绑定时间
        this.triggerListener = {
            event: 'focus'
        };
    }
    /**
     * 添加事件
     * @param elem
     * @param event
     * @param fn
     */
    AreaPickerDirective.prototype.addEvent = function (elem, event, fn) {
        elem['addEventListener'](event, fn);
        this.handlers.push({
            elem: elem,
            event: event,
            fn: fn
        });
    };
    /**
     * 移除事件
     * @param elem
     * @param event
     * @param fn
     */
    AreaPickerDirective.prototype.removeEvent = function (elem, event, fn) {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            if (elem === handler.elem && event === handler.event && fn === handler.fn) {
                elem['removeEventListener'](event, fn);
            }
        }
    };
    /**
     * 清空事件
     */
    AreaPickerDirective.prototype.clearEvents = function () {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler.elem.removeEventListener(handler.event, handler.fn);
        }
    };
    AreaPickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.triggerListener.fn = function (ev) {
            _this.addEvent(_this.elemRef.nativeElement, 'click', function (ev) {
                ev.stopPropagation();
            });
            var picker = _this.areaPicker;
            if (picker.wrap) {
                return;
            }
            picker.createWrap();
            picker.setPosition(_this.elemRef.nativeElement);
            picker.createHeader();
            picker.createBody();
            picker.clearBody();
            picker.activate(0);
            picker.init();
            _this.addEvent(picker.wrap, 'click', function (ev) {
                ev.stopPropagation();
                var target = ev.target || ev.srcElement;
                var type = target['getAttribute']('data-type');
                if (type === 'item') {
                    var dataIndex = target['getAttribute']('data-index');
                    var selectedData = picker.items[picker.index].data[dataIndex];
                    picker.items[picker.index].elem.innerHTML = picker.getObjByKey(selectedData, picker.items[picker.index].key); //设置top内容
                    var nextIndex = picker.index + 1; //下一个激活的下标
                    picker.values.splice(picker.index + 1, picker.values.length - (picker.index + 1)); //值切割
                    picker.values[picker.index] = selectedData;
                    var selectedCallback = picker.items[picker.index].selected;
                    if (nextIndex < picker.items.length) {
                        picker.clearBody(); //清空body里的元素
                        picker.activate(nextIndex); //激活下一个
                    }
                    else {
                        if (typeof picker.done === 'function') {
                            _this.ngModelChange.emit(picker.getValuesStr());
                            picker.close(); //关闭弹出框
                            _this.clearEvents(); //清空（临时）事件
                            picker.done(picker.values);
                        }
                    }
                    selectedCallback(selectedData); //触发选择完毕回调
                }
                else if (type === 'header') {
                    var index = parseInt(target['getAttribute']('data-index'));
                    if (index !== picker.index) {
                        if (index < picker.index) {
                            picker.activate(index);
                            picker.setData(picker.items[index].data);
                        }
                        else {
                            if (picker.values[index] == picker.items[index].data) {
                                picker.activate(index);
                                picker.setData(picker.items[index].data);
                            }
                        }
                    }
                }
            });
            //点击空白关闭
            _this.addEvent(document, 'click', function () {
                _this.areaPicker.close();
                _this.clearEvents();
            });
            //窗口大小改变
            _this.addEvent(window, 'resize', function (ev) {
                if (_this.resizeTimer) {
                    clearTimeout(_this.resizeTimer);
                }
                _this.resizeTimer = setTimeout(function () {
                    _this.areaPicker.setPosition(_this.elemRef.nativeElement);
                }, 10);
            });
        };
        this.elemRef.nativeElement.addEventListener(this.triggerListener.event, this.triggerListener.fn);
    };
    AreaPickerDirective.prototype.ngOnDestroy = function () {
        this.areaPicker.close();
        this.elemRef.nativeElement.removeEventListener(this.triggerListener.event, this.triggerListener.fn);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__area_picker__["a" /* AreaPicker */])
    ], AreaPickerDirective.prototype, "areaPicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], AreaPickerDirective.prototype, "ngModelChange", void 0);
    AreaPickerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[areaPicker]',
            template: '',
            styles: [__webpack_require__("./src/packages/dolphinng/src/area-picker/area-Picker.directive.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], AreaPickerDirective);
    return AreaPickerDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/area-picker/area-picker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_picker_directive__ = __webpack_require__("./src/packages/dolphinng/src/area-picker/area-picker.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AreaPickerModule = /** @class */ (function () {
    function AreaPickerModule() {
    }
    AreaPickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__area_picker_directive__["a" /* AreaPickerDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__area_picker_directive__["a" /* AreaPickerDirective */]
            ]
        })
    ], AreaPickerModule);
    return AreaPickerModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/area-picker/area-picker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPicker; });
var AreaPicker = /** @class */ (function () {
    function AreaPicker() {
        this.values = []; //结果
        this.index = 0; //激活的item
        this.isShowLoader = false; //是否显示loader
    }
    /**
     * 创建最外层元素
     */
    AreaPicker.prototype.createWrap = function () {
        var _this = this;
        var wrap = document.createElement('DIV');
        wrap.className = 'areaPicker';
        //定位
        this.setPosition(wrap);
        this.wrap = wrap;
        document.body.appendChild(this.wrap);
        setTimeout(function () {
            _this.wrap.style.transition = 'opacity .3s ease-out';
            _this.wrap.style.opacity = '1';
        });
    };
    /**
     * 创建顶部
     */
    AreaPicker.prototype.createHeader = function () {
        var header = document.createElement('DIV');
        header.className = 'areaPicker-header';
        for (var i = 0, len = this.items.length; i < len; i++) {
            var item = document.createElement('DIV');
            item.className = 'areaPicker-header-item';
            item.innerHTML = this.items[i].label;
            item.setAttribute('data-index', i + '');
            item.setAttribute('data-type', 'header');
            this.items[i].elem = item;
            header.appendChild(item);
        }
        this.header = header;
        this.wrap.appendChild(this.header);
    };
    /**
     * 创建body（选择区）
     */
    AreaPicker.prototype.createBody = function () {
        var body = document.createElement('DIV');
        body.className = 'areaPicker-body';
        this.body = body;
        this.wrap.appendChild(this.body);
    };
    /**
     * 设置数据
     * @param data 新的数据
     * @param index 当前激活的item
     */
    AreaPicker.prototype.setData = function (data, index) {
        var i = (index !== undefined ? index : this.index);
        this.items[i].data = data;
        this.setBodyContent();
    };
    /**
     * 清空指定items下标的数据
     * @param index
     */
    AreaPicker.prototype.clearData = function (index) {
        var i = (index !== undefined ? index : this.index);
        this.items[i].data = [];
    };
    /**
     * 清空body内容
     */
    AreaPicker.prototype.clearBody = function () {
        this.body.innerHTML = this.isShowLoader ? '<span class="areaPicker-loader">加载中...</span>' : '';
    };
    /**
     * 激活item
     * @param index
     */
    AreaPicker.prototype.activate = function (index) {
        for (var i = 0, len = this.items.length; i < len; i++) {
            this.removeClass(this.items[i].elem, 'active');
            if (i >= index) {
                this.items[i].elem.innerHTML = this.items[i].label;
            }
        }
        this.addClass(this.items[index].elem, 'active');
        this.index = index;
    };
    /**
     * 设置body里的内容（供选择的元素）
     * @param index
     */
    AreaPicker.prototype.setBodyContent = function (index) {
        this.body.innerHTML = '';
        var act_index = index || this.index;
        for (var i = 0, len = this.items[act_index].data.length; i < len; i++) {
            var o = this.items[act_index].data[i];
            var btn = document.createElement('SPAN');
            btn.className = 'areaPicker-item';
            btn.setAttribute('data-index', i + '');
            btn.setAttribute('data-type', 'item');
            btn.innerHTML = this.getObjByKey(o, this.items[act_index].key);
            this.body.appendChild(btn);
        }
    };
    /**
     * 定位
     * @param refElem
     */
    AreaPicker.prototype.setPosition = function (refElem) {
        var el = this.wrap;
        if (el) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            var offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight;
            var pos = refElem.getBoundingClientRect();
            el.style.position = 'absolute';
            el.style.minWidth = (pos.right - pos.left) + 'px';
            if (document.body.clientHeight - pos.bottom < this.wrap.offsetHeight) {
                if (this.wrap.className.split(/\s+/).indexOf('areaPicker-top') < 0) {
                    this.addClass(this.wrap, 'areaPicker-top');
                }
                el.style.left = (pos.left + scrollLeft) + 'px';
                //el.style.top = (pos.top-this.wrap.offsetHeight+scrollTop)+ 'px';
                el.style.bottom = (offsetHeight - pos.top - scrollTop) + 'px';
            }
            else {
                if (this.wrap.className.split(/\s+/).indexOf('areaPicker-top') >= 0) {
                    this.removeClass(this.wrap, 'areaPicker-top');
                }
                el.style.left = (pos.left + scrollLeft) + 'px';
                el.style.top = (pos.bottom + scrollTop) + 'px';
            }
        }
    };
    /**
     * 关闭弹出框
     */
    AreaPicker.prototype.close = function () {
        if (this.wrap) {
            document.body.removeChild(this.wrap);
            this.wrap = null;
        }
    };
    /**
     * 通过key字符串获取指定对象的数据
     * @param data
     * @param keyStr  key/key.key.....
     * @returns any
     */
    AreaPicker.prototype.getObjByKey = function (data, keyStr) {
        if (data && typeof data === 'object') {
            var keys = keyStr.split('.');
            var obj = data;
            while (keys.length) {
                obj = obj[keys.shift()];
            }
            return obj;
        }
        else {
            return data;
        }
    };
    /**
     * 获取values中key指定的值拼接的字符串
     * @returns string
     */
    AreaPicker.prototype.getValuesStr = function () {
        var str = '';
        for (var i = 0, len = this.values.length; i < len; i++) {
            str += this.getObjByKey(this.values[i], this.items[i].key);
        }
        return str;
    };
    /**
     * 为元素添加一个类
     * @param elem
     * @param className
     */
    AreaPicker.prototype.addClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        if (classList.indexOf(className) < 0) {
            classList.push(className);
            elem.className = classList.join(' ');
        }
    };
    /**
     * 删除某个类
     * @param elem
     * @param className
     */
    AreaPicker.prototype.removeClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        var clsIndex = classList.indexOf(className);
        if (clsIndex >= 0) {
            classList.splice(clsIndex, 1);
            elem.className = classList.join(' ');
        }
    };
    return AreaPicker;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/btn-back/btn-back.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnBackDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BtnBackDirective = /** @class */ (function () {
    function BtnBackDirective(elemRef) {
        this.elemRef = elemRef;
    }
    BtnBackDirective.prototype.ngOnInit = function () {
        this.elemRef.nativeElement.addEventListener('click', function () {
            history.back();
        });
    };
    BtnBackDirective.prototype.ngOnDestroy = function () {
    };
    BtnBackDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[btnBack]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], BtnBackDirective);
    return BtnBackDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/btn-back/btn-back.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnBackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__btn_back_directive__ = __webpack_require__("./src/packages/dolphinng/src/btn-back/btn-back.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BtnBackModule = /** @class */ (function () {
    function BtnBackModule() {
    }
    BtnBackModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__btn_back_directive__["a" /* BtnBackDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__btn_back_directive__["a" /* BtnBackDirective */]
            ]
        })
    ], BtnBackModule);
    return BtnBackModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{styleClass!=='none'?styleClass:''}} {{display==='block'?'checkbox':'checkbox-inline'}}\">\n  <label class=\"i-checks\"\n         [ngClass]=\"{'i-checks-sm':size==='sm','i-checks-lg':size==='lg'}\">\n    <input type=\"checkbox\"  [(ngModel)]=\"value\" [name]=\"name\" [disabled]=\"disabled\" (change)=\"changeAction($event)\" />\n    <i [ngClass]=\"{'inner-checked':innerStyle==='checked'}\"\n       [style.border-color]=\"value?customBackground&&innerStyle!=='checked'?customBackground:null:null\"\n       [style.background-color]=\"value?customBackground&&innerStyle==='checked'?customBackground:null:null\"\n       >\n      <span class=\"i-checks-inner\" [style.background-color]=\"value?customBackground&&innerStyle!=='checked'?customBackground:null:null\">\n\n      </span>\n    </i>\n    <ng-content></ng-content>\n  </label>\n</div>\n\n\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/checkbox/checkbox.component.less":
/***/ (function(module, exports) {

module.exports = ".checkbox,\n.checkbox-inline {\n  padding-right: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: relative;\n  margin-top: 0;\n  margin-left: 0;\n  top: 2px;\n}\n.i-checks input + i:before {\n  content: none;\n}\n.i-checks input[disabled]:checked + i .i-checks-inner {\n  background-color: #dee5e7;\n}\n.i-checks input:checked + i .i-checks-inner {\n  left: 4px;\n  top: 4px;\n  width: 10px;\n  height: 10px;\n  background-color: #23b7e5;\n}\n.i-checks > i .i-checks-inner {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0;\n  height: 0;\n  background-color: transparent;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.i-checks input + i.inner-checked {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.i-checks input:checked + i.inner-checked {\n  border-color: transparent;\n  background-color: #186ba0;\n}\n.i-checks input:checked + i.inner-checked .i-checks-inner {\n  left: 2px;\n  top: 3px;\n  width: 14px;\n  height: 8px;\n  background-color: transparent;\n  border-left: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.i-checks.i-checks-sm input:checked + i.inner-checked .i-checks-inner {\n  left: 2px;\n  top: 2px;\n  width: 10px;\n  height: 6px;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n}\n.i-checks.i-checks-lg input:checked + i.inner-checked .i-checks-inner {\n  left: 4px;\n  top: 6px;\n  width: 20px;\n  height: 10px;\n  background-color: transparent;\n  border-left: 4px solid #fff;\n  border-bottom: 4px solid #fff;\n}\n.i-checks-lg input:checked + i .i-checks-inner {\n  left: 8px;\n  top: 8px;\n  width: 12px;\n  height: 12px;\n}\n.i-checks-sm input:checked + i .i-checks-inner {\n  left: 3px;\n  top: 3px;\n  width: 8px;\n  height: 8px;\n}\n.i-checks > i {\n  margin-left: -16px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(elemRef) {
        this.elemRef = elemRef;
        this.value = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.changeAction = function (ev) {
        this.valueChange.emit(this.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CheckboxComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "innerStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "customBackground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'checkbox',
            template: __webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/checkbox/checkbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_component__ = __webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__checkbox_component__["a" /* CheckboxComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__checkbox_component__["a" /* CheckboxComponent */]
            ]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/common/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__q_btn_group_q_btn_group_module__ = __webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__btn_back_btn_back_module__ = __webpack_require__("./src/packages/dolphinng/src/btn-back/btn-back.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_max_length_text_max_length_module__ = __webpack_require__("./src/packages/dolphinng/src/text-max-length/text-max-length.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toggle_class_toggle_class_module__ = __webpack_require__("./src/packages/dolphinng/src/toggle-class/toggle-class.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//components

//directives



var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__q_btn_group_q_btn_group_module__["a" /* QBtnGroupModule */],
                __WEBPACK_IMPORTED_MODULE_2__btn_back_btn_back_module__["a" /* BtnBackModule */],
                __WEBPACK_IMPORTED_MODULE_3__text_max_length_text_max_length_module__["a" /* TextMaxLengthModule */],
                __WEBPACK_IMPORTED_MODULE_4__toggle_class_toggle_class_module__["a" /* ToggleClassModule */]
            ],
            declarations: [],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__q_btn_group_q_btn_group_module__["a" /* QBtnGroupModule */],
                __WEBPACK_IMPORTED_MODULE_2__btn_back_btn_back_module__["a" /* BtnBackModule */],
                __WEBPACK_IMPORTED_MODULE_3__text_max_length_text_max_length_module__["a" /* TextMaxLengthModule */],
                __WEBPACK_IMPORTED_MODULE_4__toggle_class_toggle_class_module__["a" /* ToggleClassModule */]
            ]
        })
    ], CommonModule);
    return CommonModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/currency-format/currency-format.deirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyFormatDirective = /** @class */ (function () {
    function CurrencyFormatDirective(elemRef) {
        this.elemRef = elemRef;
        this.separateLength = 3; //分隔长度
        this.accuracy = 2; //保留精度
        this.separator = ','; //分隔符
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CurrencyFormatDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.elemRef.nativeElement.value = _this.transform(_this.elemRef.nativeElement.value);
        });
        var inputFn = function (ev) {
            _this.ngModelChange.emit(_this.elemRef.nativeElement.value.replace(new RegExp(_this.separator, 'g'), ''));
            setTimeout(function () {
                _this.elemRef.nativeElement.value = _this.transform(_this.elemRef.nativeElement.value);
            }, 0);
        };
        var testinput = document.createElement('input');
        if ('oninput' in testinput) {
            this.elemRef.nativeElement.addEventListener("input", inputFn, false);
        }
        else {
            this.elemRef.nativeElement.onpropertychange = inputFn;
        }
    };
    CurrencyFormatDirective.prototype.ngOnChanges = function (changes) {
    };
    CurrencyFormatDirective.prototype.transform = function (value) {
        if (value === undefined || value === null) {
            return value;
        }
        else if (!value) {
            return '';
        }
        var sep = this.separator;
        var inputStr = (value + '').replace(new RegExp(sep, 'g'), ''), numRegExp = /^[0-9]+(\.[0-9]+)?$/, str = inputStr.replace(/\s/g, ''), sepLen = this.separateLength;
        var result = '';
        if (numRegExp.test(str)) {
            if (sepLen) {
                var splits = str.split('.');
                var intStr = splits[0];
                var ext = splits.length > 1 ? splits[1] : '';
                var intLen = intStr.length, newIntStr = '';
                if (intLen > sepLen) {
                    for (var i = intLen - sepLen; i > 0 - sepLen; i = i - sepLen) {
                        if (i > 0) {
                            newIntStr = sep + intStr.substr(i, sepLen) + newIntStr;
                        }
                        else {
                            newIntStr = intStr.substr(0, sepLen + i) + newIntStr;
                        }
                    }
                }
                else {
                    newIntStr = intStr;
                }
                result = newIntStr + (ext ? '.' + ext : '');
            }
            else {
                result = inputStr;
            }
        }
        else {
            result = inputStr;
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CurrencyFormatDirective.prototype, "ngModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CurrencyFormatDirective.prototype, "currencyFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CurrencyFormatDirective.prototype, "ngModelChange", void 0);
    CurrencyFormatDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[currencyFormat]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], CurrencyFormatDirective);
    return CurrencyFormatDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/currency-format/currency-format.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_format_deirective__ = __webpack_require__("./src/packages/dolphinng/src/currency-format/currency-format.deirective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_format_pipe__ = __webpack_require__("./src/packages/dolphinng/src/currency-format/currency-format.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//directives


var CurrencyFormatModule = /** @class */ (function () {
    function CurrencyFormatModule() {
    }
    CurrencyFormatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__currency_format_deirective__["a" /* CurrencyFormatDirective */],
                __WEBPACK_IMPORTED_MODULE_2__currency_format_pipe__["a" /* CurrencyFormatPipe */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__currency_format_deirective__["a" /* CurrencyFormatDirective */],
                __WEBPACK_IMPORTED_MODULE_2__currency_format_pipe__["a" /* CurrencyFormatPipe */]
            ]
        })
    ], CurrencyFormatModule);
    return CurrencyFormatModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/currency-format/currency-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
        this.separateLength = 3; //分隔长度
        this.accuracy = 2; //保留精度
        this.format = ''; //格式
        this.separator = ','; //分隔符
    }
    CurrencyFormatPipe.prototype.transform = function (value, param) {
        if (value === undefined || value === null) {
            return value;
        }
        else if (!value && value !== 0) {
            return '';
        }
        var sep = this.separator;
        var flag = '';
        var inputStr = value + '';
        flag = (inputStr.indexOf('-') >= 0 ? '-' : inputStr.indexOf('+') >= 0 ? '+' : '');
        inputStr = inputStr.replace(/[^\d\.]/g, /*new RegExp(sep, 'g')*/ '');
        var numRegExp = /^[\-\+]?[0-9]+(\.[0-9]+)?$/, str = inputStr.replace(/\s/g, ''), accuracy = this.accuracy, format = this.format, sepLen = this.separateLength;
        //参数匹配
        var nums = [];
        var strs = [];
        if (typeof param === 'string') {
            strs.push(param);
        }
        else if (typeof param === 'number') {
            nums.push(param);
        }
        else if (param instanceof Array) {
            for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
                var o = param_1[_i];
                if (typeof o === 'string') {
                    strs.push(o);
                }
                else if (typeof o === 'number') {
                    nums.push(o);
                }
            }
        }
        //数字参数识别
        if (nums.length > 0) {
            accuracy = nums[0];
        }
        if (nums.length > 1) {
            sepLen = nums[1];
        }
        //字符串参数识别
        if (strs.length > 0) {
            format = strs[0];
        }
        if (strs.length > 1) {
            sep = strs[1];
        }
        var result = '';
        if (numRegExp.test(str)) {
            if (sepLen) {
                str = parseFloat(str).toFixed(accuracy) + ''; //四舍五入
                var splits = str.split('.');
                var intStr = splits[0];
                var ext = splits.length > 1 ? splits[1] : '';
                if (ext.length < accuracy) {
                    var fillLen = accuracy - ext.length;
                    for (var i = 0; i < fillLen; i++) {
                        ext += '0';
                    }
                }
                var intLen = intStr.length, newIntStr = '';
                if (intLen > sepLen) {
                    for (var i = intLen - sepLen; i > 0 - sepLen; i = i - sepLen) {
                        if (i > 0) {
                            newIntStr = sep + intStr.substr(i, sepLen) + newIntStr;
                        }
                        else {
                            newIntStr = intStr.substr(0, sepLen + i) + newIntStr;
                        }
                    }
                }
                else {
                    newIntStr = intStr;
                }
                result = newIntStr + (ext ? '.' + ext : '');
            }
            else {
                result = inputStr;
            }
            //格式化
            if (format) {
                var index = format.indexOf('xx');
                if (index >= 0) {
                    result = format.replace(/xx/, result);
                }
                else {
                    result = result + format;
                }
            }
        }
        else {
            result = inputStr;
        }
        if (flag) {
            result = flag + result;
        }
        return result;
    };
    CurrencyFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'currencyFormat' })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/date-format/date-format.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__ = __webpack_require__("./src/packages/dolphinng/src/date-format/date-format.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatModule = /** @class */ (function () {
    function DateFormatModule() {
    }
    DateFormatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__["a" /* DatePipe */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__date_format_pipe__["a" /* DatePipe */]
            ]
        })
    ], DateFormatModule);
    return DateFormatModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/date-format/date-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
        this.format = 'yyyy-MM-dd';
    }
    DatePipe.prototype.createDate = function (dateStr) {
        var date = new Date(dateStr);
        if (date + '' === 'Invalid Date') {
            date = new Date(dateStr + ''.replace(/-/g, '/').replace(/\.\d+$/, ''));
            if (date + '' === 'Invalid Date') {
                return null;
            }
        }
        return date;
    };
    DatePipe.prototype.transform = function (value, fmt) {
        if (value) {
            var date = void 0;
            if (value instanceof Date) {
                date = value;
            }
            else if (typeof value === 'string') {
                date = this.createDate(value);
            }
            else if (typeof value === 'number') {
                date = new Date(value);
            }
            if (!date) {
                return value;
            }
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒
            };
            if (!fmt) {
                fmt = this.format;
            }
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            return fmt;
        }
        else {
            return value;
        }
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'date' })
    ], DatePipe);
    return DatePipe;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content select=\"input\"></ng-content>\n<div #popover [ngClass]=\"{'datetime-picker-hide':!ready}\">\n    <div class=\"datetime-picker\" *ngIf=\"visible\" (click)=\"stopPropagation($event)\" [style.left.px]=\"left\" [style.top.px]=\"top\" [style.zIndex]=\"zIndex||null\" [style.opacity]=\"ready?'1':0\" [style.transition]=\"ready?'opacity .3s ease-out':'none'\" #datetimePicker>\n        <div class=\"datetime-picker-header\">\n            <div class=\"datetime-picker-ymd\">\n                <span class=\"datetime-picker-prev\" (click)=\"prevMonth();createDayOptions()\">‹</span>\n                <select [(ngModel)]=\"year\" (change)=\"setDateFullYear();setValues();createDayOptions()\">\n          <option *ngFor=\"let y of yearOptions\" [value]=\"y\">{{y}}</option>\n        </select> 年\n                <select [(ngModel)]=\"month\" (change)=\"setDateMonth();setValues();createDayOptions()\">\n          <option *ngFor=\"let m of monthOptions\" [value]=\"m\">{{m+1}}</option>\n        </select> 月\n                <span class=\"datetime-picker-next\" (click)=\"nextMonth();createDayOptions()\">›</span>\n            </div>\n\n        </div>\n        <div class=\"datetime-picker-body\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>日</th>\n                        <th>一</th>\n                        <th>二</th>\n                        <th>三</th>\n                        <th>四</th>\n                        <th>五</th>\n                        <th>六</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let group of dayOptions\">\n                        <td *ngFor=\"let d of group\" [ngClass]=\"{'disabled':!d.isCurrent,'invalid':d.disabled,'active':d.isCurrent&&d.text==day}\" (click)=\"pickDay(d)\">{{d.text}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <!--<div class=\"datetime-picker-time-input\" *ngIf=\"isPickingTime\">\n        <input *ngIf=\"isPickHours\" maxlength=\"2\" placeholder=\"时\" [(ngModel)]=\"hours\" (input)=\"maxInputTest($event,23)\"/>\n        <span *ngIf=\"isPickMinutes\">:</span>\n        <input *ngIf=\"isPickMinutes\" maxlength=\"2\" placeholder=\"分\" [(ngModel)]=\"minutes\" (input)=\"maxInputTest($event,59)\"/>\n        <span *ngIf=\"isPickSeconds\">:</span>\n        <input *ngIf=\"isPickSeconds\" maxlength=\"2\" placeholder=\"秒\" [(ngModel)]=\"seconds\" (input)=\"maxInputTest($event,59)\"/>\n        <span *ngIf=\"isPickHours&&!(isPickMinutes||isPickSeconds)\">时</span>\n      </div>-->\n            <div class=\"datetime-picker-time-input\" *ngIf=\"isPickingTime\">\n                <select *ngIf=\"isPickHours\" [(ngModel)]=\"hours\">\n          <option *ngFor=\"let h of hoursOptions\" [value]=\"h\">{{h>=10?h:'0'+h}}</option>\n        </select>\n                <span *ngIf=\"isPickMinutes\">:</span>\n                <select *ngIf=\"isPickMinutes\" [(ngModel)]=\"minutes\">\n          <option *ngFor=\"let m of minutesOrSecondsOptions\" [value]=\"m\">{{m>=10?m:'0'+m}}</option>\n        </select>\n                <span *ngIf=\"isPickSeconds\">:</span>\n                <select *ngIf=\"isPickSeconds\" [(ngModel)]=\"seconds\">\n          <option *ngFor=\"let s of minutesOrSecondsOptions\" [value]=\"s\">{{s>=10?s:'0'+s}}</option>\n        </select>\n                <span *ngIf=\"isPickHours&&!(isPickMinutes||isPickSeconds)\">时</span>\n            </div>\n            <div class=\"datetime-picker-errors\" *ngIf=\"minError||maxError\">\n                <div class=\"datetime-picker-error\">\n                    <span *ngIf=\"minError\">您选择的日期小于允许的最小日期！</span>\n                    <span *ngIf=\"maxError\">您选择的日期大于允许的最大日期！</span>\n                    <span class=\"datetime-picker-btn\" (click)=\"clearErrors()\">确定</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"datetime-picker-footer\">\n            <div class=\"datetime-picker-time\">\n                <div *ngIf=\"!isPickingTime\" (click)=\"isPickingTime=true\">\n                    <span *ngIf=\"isPickHours\">{{hours>=10?hours:'0'+hours}}</span>\n                    <span *ngIf=\"isPickMinutes\">:{{minutes>=10?minutes:'0'+minutes}}</span>\n                    <span *ngIf=\"isPickSeconds\">:{{seconds>=10?seconds:'0'+seconds}}</span>\n                    <span *ngIf=\"isPickHours&&!(isPickMinutes||isPickSeconds)\">时</span>\n                </div>\n                <div *ngIf=\"isPickingTime\" (click)=\"isPickingTime=false\">返回日期</div>\n            </div>\n            <div class=\"datetime-picker-btns\">\n                <a class=\"datetime-picker-clear\" (click)=\"clear()\">清空</a>\n                <a class=\"datetime-picker-today\" (click)=\"now()\">{{isPickHours||isPickMinutes||isPickSeconds?'现在':'今天'}}</a>\n                <a class=\"datetime-picker-sure\" *ngIf=\"isPickHours||isPickMinutes||isPickSeconds\" (click)=\"output()\">确定</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.less":
/***/ (function(module, exports) {

module.exports = ".datetime-picker {\n  width: 240px;\n  height: 282px;\n  background-color: #fff;\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n  left: 0;\n  overflow: hidden;\n}\n.datetime-picker * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.datetime-picker-header {\n  border-bottom: 1px solid #ddd;\n  padding: 5px;\n  height: 36px;\n  line-height: 24px;\n  background-color: #f5f5f5;\n  color: #333;\n}\n.datetime-picker-header select {\n  min-width: 50px;\n  height: 24px;\n  text-align: center;\n  padding: 2px;\n}\n.datetime-picker-header:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.datetime-picker-ymd {\n  padding: 0 30px;\n  text-align: center;\n  position: relative;\n  letter-spacing: 1px;\n}\n.datetime-picker-time:hover {\n  color: #000;\n}\n.datetime-picker-body {\n  padding: 5px;\n  height: 208px;\n  position: relative;\n}\n.datetime-picker-body table {\n  width: 100%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 13px;\n  color: #333;\n}\n.datetime-picker-body table td,\n.datetime-picker-body table th {\n  text-align: center;\n  padding: 2px;\n}\n.datetime-picker-body table td:hover {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n.datetime-picker-body table td.disabled {\n  color: #999;\n}\n.datetime-picker-body table td.invalid {\n  color: #999;\n  cursor: not-allowed;\n}\n.datetime-picker-body table td.active {\n  color: #000;\n  background-color: #f0f0f0;\n}\n.datetime-picker-footer {\n  height: 36px;\n  border-top: 1px solid #ddd;\n  padding: 5px;\n}\n.datetime-picker-time {\n  float: left;\n  padding-right: 2px;\n  cursor: pointer;\n  color: #444 ;\n  letter-spacing: 1px;\n  line-height: 25px;\n  padding-left: 10px;\n  font-size: 13px;\n}\n.datetime-picker-time span {\n  float: left;\n}\n.datetime-picker-btns {\n  float: right;\n  line-height: 26px;\n}\n.datetime-picker-clear,\n.datetime-picker-today,\n.datetime-picker-sure {\n  padding: 4px 8px;\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  font-size: 13px;\n  color: #333;\n  cursor: pointer;\n}\n.datetime-picker-clear:hover,\n.datetime-picker-today:hover,\n.datetime-picker-sure:hover {\n  background-color: #f0f0f0;\n  color: #000;\n}\n.datetime-picker-clear:active,\n.datetime-picker-today:active,\n.datetime-picker-sure:active {\n  background-color: #eee;\n}\n.datetime-picker-prev,\n.datetime-picker-next {\n  position: absolute;\n  display: block;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #ddd;\n  background-color: #eaeaea;\n  top: 0;\n  text-align: center;\n  line-height: 20px;\n  font-size: 24px;\n  cursor: pointer;\n}\n.datetime-picker-prev {\n  left: 0;\n}\n.datetime-picker-next {\n  right: 0;\n}\n.datetime-picker-prev:hover,\n.datetime-picker-next:hover {\n  background-color: #e5e5e5;\n}\n.datetime-picker-time-input {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fafafa;\n  text-align: center;\n  line-height: 180px;\n}\n.datetime-picker-time-input input {\n  width: 50px;\n  text-align: center;\n  padding: 4px 10px;\n  border: 1px solid #ddd;\n  line-height: 16px;\n}\n.datetime-picker-errors {\n  display: table;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  text-align: center;\n  line-height: 32px;\n}\n.datetime-picker-errors .datetime-picker-error {\n  display: table-cell;\n  padding: 0 40px;\n  vertical-align: middle;\n}\n.datetime-picker-btn {\n  padding: 4px 12px;\n  background-color: #fff;\n  color: #666;\n  border: 1px solid #ddd;\n  cursor: pointer;\n}\n.datetime-picker-btn:hover {\n  background-color: #fafafa;\n  color: #333;\n}\n.datetime-picker-btn:active {\n  background-color: #f5f5f5;\n}\n.datetime-picker-hide {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatetimePickerComponent = /** @class */ (function () {
    function DatetimePickerComponent(elemRef) {
        this.elemRef = elemRef;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); //输出
        this.format = 'yyyy-MM-dd'; //格式化  yyyy-MM-dd hh:mm:ss
        this.start = '1970/01/01'; //最小可选日期（时间）
        this.end = '2070/12/31'; //最大可选日期（时间）
        this.trigger = 'focus'; //触发事件
        this.zIndex = 999; //层级
        this.isCalendar = false; //是否显示节日
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); //选择完成
        this.visible = false; //是否显示
        this.ready = false; //是否已就绪
        this.year = null; //年
        this.month = null; //月
        this.day = null; //日
        this.hours = null; //时
        this.minutes = null; //分
        this.seconds = null; //秒
        //根据format设置以下值
        this.isPickSeconds = false; //是否选择秒
        this.isPickMinutes = false; //是否选择分
        this.isPickHours = false; //是否选择时
        this.isPickingTime = false; //是否在选择时间
        this.minError = false; //超出最小日期
        this.maxError = false; //超出最大日期
        this.left = 0;
        this.handlers = [];
        this.hoursOptions = [];
        this.minutesOrSecondsOptions = [];
        for (var i = 0; i < 24; i++) {
            this.hoursOptions.push(i);
        }
        for (var j = 0; j < 60; j++) {
            this.minutesOrSecondsOptions.push(j);
        }
    }
    DatetimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.appendChild(this.popover.nativeElement);
        {
            this.elemRef.nativeElement.style.display = 'inline-block';
            this.elemRef.nativeElement.style.position = 'relative';
            this.elemRef.nativeElement.style.verticalAlign = 'middle';
        }
        var inputElem = this.elemRef.nativeElement.querySelector('input');
        this.inputElem = inputElem;
        if (this.inputElem) {
            this.addEvent(this.inputElem, 'blur', function (ev) {
                if (_this.value) {
                    if (!_this.isFormat(_this.value, _this.format)) {
                        _this.valueChange.emit('');
                    }
                    else {
                        if (_this.min) {
                            var minDate = _this.getMinDate();
                            if (minDate && _this.isDateTimeGreaterThan(minDate, _this.date)) {
                                _this.valueChange.emit('');
                            }
                        }
                        if (_this.max) {
                            var maxDate = _this.getMaxDate();
                            if (maxDate && _this.isDateTimeGreaterThan(_this.date, maxDate)) {
                                _this.valueChange.emit('');
                            }
                        }
                    }
                }
            });
            this.addEvent(this.inputElem, 'input', function (ev) {
                if (_this.value && _this.isFormat(_this.value, _this.format)) {
                    _this.setOrgDate();
                }
            });
            this.addEvent(this.inputElem, this.trigger, function (ev) {
                _this.init();
                _this.visible = true;
                setTimeout(function () {
                    _this.setPosition();
                });
            });
            this.addEvent(document, 'click', function (ev) {
                if (_this.inputElem !== ev.target) {
                    if (_this.visible) {
                        _this.close();
                    }
                }
            });
        }
    };
    DatetimePickerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handle = _a[_i];
            handle.elem.removeEventListener(handle.event, handle.fn);
        }
        if (this.popover.nativeElement) {
            document.body.removeChild(this.popover.nativeElement);
        }
    };
    /**
     * 初始化
     */
    DatetimePickerComponent.prototype.init = function () {
        this.isPickingTime = false;
        this.minError = false;
        this.maxError = false;
        this.top = null;
        this.ready = false;
        this.testFormat();
        this.createYearOptions();
        this.createMonthOptions();
        this.setOrgDate();
        this.createDayOptions();
    };
    /**
     * 检测format以确定是否选择时、分、秒
     */
    DatetimePickerComponent.prototype.testFormat = function () {
        if (typeof this.format === 'string') {
            this.isPickHours = /[h|H]/.test(this.format);
            this.isPickMinutes = /[m]/.test(this.format);
            this.isPickSeconds = /[s|S]/.test(this.format);
        }
    };
    /**
     * 创建“年”选项
     */
    DatetimePickerComponent.prototype.createYearOptions = function () {
        this.yearOptions = [];
        var startDate = this.createDateWidthFormat(this.start, this.format);
        var endDate = this.createDateWidthFormat(this.end, this.format);
        var startYear = startDate.getFullYear();
        var endYear = endDate.getFullYear();
        if (startYear && endYear) {
            for (var i = startYear; i < endYear; i++) {
                this.yearOptions.push(i);
            }
        }
    };
    /**
     * 创建“月”选项
     */
    DatetimePickerComponent.prototype.createMonthOptions = function () {
        this.monthOptions = [];
        for (var i = 0; i < 12; i++) {
            this.monthOptions.push(i);
        }
    };
    /**
     * 创建“天”选项
     */
    DatetimePickerComponent.prototype.createDayOptions = function () {
        if (this.year === null || this.month === null) {
            return;
        }
        //确定第一天的星期
        //确定最后一天的星期
        //首尾填充
        var dayIndex = 0;
        var startDay = this.createDate();
        startDay.setDate(1);
        startDay.setMonth(this.month);
        startDay.setFullYear(this.year);
        var weekDay = startDay.getDay();
        if (weekDay === 0) {
            startDay.setDate(startDay.getDate() - 7);
        }
        else if (weekDay < 7) {
            startDay.setDate(startDay.getDate() - weekDay);
        }
        var y = startDay.getFullYear();
        var m = startDay.getMonth();
        var d = startDay.getDate();
        this.dayOptions = [];
        var minDate = this.getMinDate(), maxDate = this.getMaxDate();
        for (var i = 0; i < 6; i++) {
            var group = [];
            for (var j = 0; j < 7; j++) {
                var newDateStr = '' + y + '/' + (m + 1) + '/' + d;
                var newDate = this.createDate(newDateStr);
                // newDate.setFullYear(y);
                //newDate.setMonth(m);
                newDate.setDate(d + dayIndex);
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                var isCurrent = (newDate.getMonth() == this.month);
                var disabled = false;
                if (minDate && this.isDateTimeGreaterThan(minDate, newDate)) {
                    disabled = true;
                }
                if (maxDate && this.isDateTimeGreaterThan(newDate, maxDate)) {
                    disabled = true;
                }
                group.push({
                    date: newDate,
                    isCurrent: isCurrent,
                    disabled: disabled,
                    text: newDate.getDate()
                });
                dayIndex++;
            }
            this.dayOptions.push(group);
        }
    };
    DatetimePickerComponent.prototype.addEvent = function (elem, event, fn) {
        elem['addEventListener'](event, fn);
        this.handlers.push({
            elem: elem,
            event: event,
            fn: fn
        });
    };
    /**
     * 通过format查找字符串str里相应的字符
     * @param str
     * @param format
     * @param condiction
     * @param len
     * @returns string
     */
    DatetimePickerComponent.prototype.searchStrByFormat = function (str, format, condiction, len) {
        var result = '';
        var index, resultLen;
        if (len instanceof Array) {
            len.sort(function (a, b) {
                return b - a;
            });
            for (var _i = 0, len_1 = len; _i < len_1.length; _i++) {
                var l = len_1[_i];
                var regExpStr = condiction + (l > 1 ? '{' + l + '}' : '');
                var resExp = new RegExp(regExpStr);
                index = format.search(resExp);
                if (index >= 0) {
                    resultLen = l;
                    break;
                }
            }
        }
        else if (typeof len === 'number') {
            var regExpStr = condiction + (len > 1 ? '{' + len + '}' : '');
            var resExp = new RegExp(regExpStr);
            index = format.search(resExp);
            resultLen = len;
        }
        if (index >= 0) {
            result = str.substring(index, index + resultLen);
            return result;
        }
    };
    DatetimePickerComponent.prototype.createDateWidthFormat = function (dateStr, format) {
        var date = this.createDate(dateStr);
        if (!date) {
            date = this.createDate();
            var year = void 0, month = void 0, day = void 0, hours = void 0, minutes = void 0, seconds = void 0;
            //日
            day = parseInt(this.searchStrByFormat(dateStr, format, '[dD]', [1, 2])) || 1;
            date.setDate(parseInt(day));
            //月
            month = parseInt(this.searchStrByFormat(dateStr, format, '[M]', [1, 2])) || 1;
            date.setMonth(parseInt(month) - 1);
            //年
            year = parseInt(this.searchStrByFormat(dateStr, format, '[yY]', 4)) || date.getFullYear();
            date.setFullYear(year);
            //时
            hours = parseInt(this.searchStrByFormat(dateStr, format, '[hH]', [1, 2])) || 0;
            date.setHours(parseInt(hours));
            //分
            minutes = parseInt(this.searchStrByFormat(dateStr, format, '[m]', [1, 2])) || 0;
            date.setMinutes(parseInt(minutes));
            //秒
            seconds = parseInt(this.searchStrByFormat(dateStr, format, '[sS]', [1, 2])) || 0;
            date.setSeconds(parseInt(seconds));
        }
        return date;
    };
    /**
     * 日期是否大于
     * @param date1
     * @param date2
     * @returns Boolean
     */
    DatetimePickerComponent.prototype.isDateTimeGreaterThan = function (date1, date2) {
        return date1.getTime() - date2.getTime() >= 1000; //误差1000毫秒以内
    };
    /**
     * 建立新的时间对象
     * @param dateStr
     * @returns Date
     */
    DatetimePickerComponent.prototype.createDate = function (dateStr) {
        var date;
        if (dateStr) {
            date = new Date(dateStr.replace(/-/g, '/'));
        }
        else {
            date = new Date();
            date.setTime(Math.floor(date.getTime() / 1000) * 1000);
        }
        if (date.toDateString() != 'Invalid Date') {
            return date;
        }
    };
    /**
     * 设置初始日期
     */
    DatetimePickerComponent.prototype.setOrgDate = function () {
        var dateStr = '';
        if (this.value) {
            dateStr = this.value;
        }
        else if (this.inputElem) {
            dateStr = this.inputElem.value;
        }
        var date;
        if (dateStr) {
            date = this.createDateWidthFormat(dateStr, this.format);
        }
        else {
            date = this.createDate();
        }
        this.date = date;
        this.setValues();
    };
    /**
     * 设置日期的年份
     * @param year
     */
    DatetimePickerComponent.prototype.setDateFullYear = function (year) {
        this.date.setFullYear(year || this.year);
    };
    /**
     * 设置日期的月份
     * @param month
     */
    DatetimePickerComponent.prototype.setDateMonth = function (month) {
        this.date.setMonth(month || this.month);
    };
    /**
     * 设置年月日时分秒的值
     * @param date
     */
    DatetimePickerComponent.prototype.setValues = function (date) {
        var dateTime = date || this.date;
        this.year = dateTime.getFullYear();
        this.month = dateTime.getMonth();
        this.day = dateTime.getDate();
        this.hours = dateTime.getHours();
        this.minutes = dateTime.getMinutes();
        this.seconds = dateTime.getSeconds();
    };
    DatetimePickerComponent.prototype.stopPropagation = function (ev) {
        ev.stopPropagation();
    };
    /**
     * 根据input相对屏幕位置设置弹出框位置
     */
    DatetimePickerComponent.prototype.setPosition = function () {
        if (this.popover && this.inputElem) {
            var popoverH = this.datetimePicker.nativeElement.offsetHeight;
            var popoverW = this.datetimePicker.nativeElement.offsetWidth;
            var rect = this.inputElem.getBoundingClientRect();
            var viewH = document.body.clientHeight;
            var viewW = document.body.clientWidth;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
            if (viewW - rect.left < popoverW) {
                this.left = rect.right - popoverW + scrollLeft;
            }
            else {
                this.left = rect.left + scrollLeft;
            }
            if (this.direction === 'bottom') {
                this.top = rect.top - popoverH + scrollTop;
            }
            else if (this.direction === 'top') {
                this.top = rect.bottom + scrollTop;
            }
            else {
                if (viewH - rect.bottom < popoverH) {
                    this.top = rect.top - popoverH + scrollTop;
                }
                else {
                    this.top = rect.bottom + scrollTop;
                }
            }
        }
        this.ready = true;
    };
    /**
     * 选择天
     */
    DatetimePickerComponent.prototype.pickDay = function (day) {
        if (!day.disabled) {
            this.date = day.date;
            this.setValues();
            if (this.isPickHours || this.isPickMinutes || this.isPickSeconds) {
                this.isPickingTime = true;
            }
            else {
                this.output();
            }
        }
    };
    /**
     * 上月
     */
    DatetimePickerComponent.prototype.prevMonth = function () {
        var newMonth = this.month - 1;
        this.date.setMonth(newMonth);
        if (this.date.getMonth() > newMonth) {
            this.date.setDate(0);
        }
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
    };
    /**
     * 下一月
     */
    DatetimePickerComponent.prototype.nextMonth = function () {
        var newMonth = this.month + 1;
        this.date.setMonth(newMonth);
        if (this.date.getMonth() > newMonth) {
            this.date.setDate(0);
        }
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
    };
    /**
     * 获取最小日期
     * @returns Date
     */
    DatetimePickerComponent.prototype.getMinDate = function () {
        if (this.min) {
            var date = this.createDateWidthFormat(this.min, this.format);
            if (date.toDateString() !== 'Invalid Date') {
                return date;
            }
        }
        return null;
    };
    /**
     * 获取最大日期
     * @returns Date
     */
    DatetimePickerComponent.prototype.getMaxDate = function () {
        if (this.max) {
            var date = this.createDateWidthFormat(this.max, this.format);
            ;
            if (date.toDateString() !== 'Invalid Date') {
                return date;
            }
        }
        return null;
    };
    /**
     * 输入时最大值检测
     * @param ev
     * @param max
     */
    DatetimePickerComponent.prototype.maxInputTest = function (ev, max) {
    };
    /**
     * 输入是否符合要求
     * @param str
     * @param format
     * @returns boolean
     */
    DatetimePickerComponent.prototype.isFormat = function (str, format) {
        var str1 = str.replace(/\d{2}|\d/g, '**');
        var str2 = format.replace(/[yYMdDhHmsS]{2}|[yYMdDhHmsS]/g, '**');
        return str1 === str2;
    };
    /**
     * 清空
     */
    DatetimePickerComponent.prototype.clear = function () {
        if (this.inputElem) {
            this.inputElem.value = '';
            this.valueChange.emit('');
        }
        this.close();
    };
    /**
     * 现在
     */
    DatetimePickerComponent.prototype.now = function () {
        var date = this.createDate();
        if (!this.isPickSeconds) {
            date.setSeconds(0);
        }
        if (!this.isPickMinutes) {
            date.setMinutes(0);
        }
        if (!this.isPickHours) {
            date.setHours(0);
        }
        this.date = date;
        this.setValues(date);
        this.createDayOptions();
        this.output();
    };
    /**
     * 清除错误
     */
    DatetimePickerComponent.prototype.clearErrors = function () {
        this.minError = false;
        this.maxError = false;
    };
    /**
     * 输出
     */
    DatetimePickerComponent.prototype.output = function () {
        var minDate = this.getMinDate(), maxDate = this.getMaxDate();
        if (minDate && this.isDateTimeGreaterThan(minDate, this.date)) {
            this.minError = true;
            return false;
        }
        else if (maxDate && this.isDateTimeGreaterThan(this.date, maxDate)) {
            this.maxError = true;
            return false;
        }
        var result = this.format;
        var month = this.month + 1;
        //年
        result = result.replace(/[yY]{4}/, this.year + '');
        //月
        if (/[M]{2}/.test(this.format)) {
            result = result.replace(/[M]{2}/, month < 10 ? '0' + month : month + '');
        }
        else if (/M/.test(this.format)) {
            result = result.replace(/M/, month + '');
        }
        //日
        if (/[dD]{2}/.test(this.format)) {
            result = result.replace(/[dD]{2}/, this.day < 10 ? '0' + this.day : this.day + '');
        }
        else if (/[dD]/.test(this.format)) {
            result = result.replace(/[dD]/, this.day + '');
        }
        //时
        if (/[hH]{2}/.test(this.format)) {
            result = result.replace(/[hH]{2}/, this.hours < 10 ? '0' + this.hours : this.hours + '');
        }
        else if (/[hH]/.test(this.format)) {
            result = result.replace(/[hH]/, this.hours + '');
        }
        //分
        if (/[m]{2}/.test(this.format)) {
            result = result.replace(/[m]{2}/, this.minutes < 10 ? '0' + this.minutes : this.minutes + '');
        }
        else if (/[m]/.test(this.format)) {
            result = result.replace(/[m]/, this.minutes + '');
        }
        //分
        if (/[sS]{2}/.test(this.format)) {
            result = result.replace(/[sS]{2}/, this.seconds < 10 ? '0' + this.seconds : this.seconds + '');
        }
        else if (/[sS]/.test(this.format)) {
            result = result.replace(/[sS]/, this.seconds + '');
        }
        this.valueChange.emit(result);
        this.close();
        this.complete.emit(result);
    };
    /**
     * 关闭
     */
    DatetimePickerComponent.prototype.close = function () {
        this.visible = false;
        this.ready = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DatetimePickerComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "format", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "start", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "end", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DatetimePickerComponent.prototype, "zIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DatetimePickerComponent.prototype, "isCalendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatetimePickerComponent.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DatetimePickerComponent.prototype, "complete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('popover'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DatetimePickerComponent.prototype, "popover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('datetimePicker'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DatetimePickerComponent.prototype, "datetimePicker", void 0);
    DatetimePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'datetime-picker',
            template: __webpack_require__("./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], DatetimePickerComponent);
    return DatetimePickerComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/datetime-picker/datetime-picker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datetime_picker_component__ = __webpack_require__("./src/packages/dolphinng/src/datetime-picker/datetime-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DatetimePickerModule = /** @class */ (function () {
    function DatetimePickerModule() {
    }
    DatetimePickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__datetime_picker_component__["a" /* DatetimePickerComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__datetime_picker_component__["a" /* DatetimePickerComponent */]
            ]
        })
    ], DatetimePickerModule);
    return DatetimePickerModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/drop-down/drop-down.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_down_slide_down_component__ = __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.ts");
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
/**
 * 展开/收起
 * @author Jianhang Yu
 */


var DropDownComponent = /** @class */ (function (_super) {
    __extends(DropDownComponent, _super);
    function DropDownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drop-down',
            template: __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.less")]
        })
    ], DropDownComponent);
    return DropDownComponent;
}(__WEBPACK_IMPORTED_MODULE_1__slide_down_slide_down_component__["a" /* SlideDownComponent */]));

//获取的高度


/***/ }),

/***/ "./src/packages/dolphinng/src/drop-down/drop-down.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drop_down_component__ = __webpack_require__("./src/packages/dolphinng/src/drop-down/drop-down.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DropDownModule = /** @class */ (function () {
    function DropDownModule() {
    }
    DropDownModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drop_down_component__["a" /* DropDownComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drop_down_component__["a" /* DropDownComponent */]
            ]
        })
    ], DropDownModule);
    return DropDownModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_checkbox_module__ = __webpack_require__("./src/packages/dolphinng/src/checkbox/checkbox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_radio_module__ = __webpack_require__("./src/packages/dolphinng/src/radio/radio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_toggle_module__ = __webpack_require__("./src/packages/dolphinng/src/toggle/toggle.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_validate_module__ = __webpack_require__("./src/packages/dolphinng/src/validate/validate.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__checkbox_checkbox_module__["a" /* CheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__radio_radio_module__["a" /* RadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__toggle_toggle_module__["a" /* ToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__validate_validate_module__["a" /* ValidateModule */]
            ],
            declarations: [],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__checkbox_checkbox_module__["a" /* CheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__radio_radio_module__["a" /* RadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__toggle_toggle_module__["a" /* ToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__validate_validate_module__["a" /* ValidateModule */]
            ]
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\" *ngIf=\"render\" (click)=\"wrapClickAction($event)\" [ngClass]=\"{'open':visible,\n    'gallery-has-footer':(isToolsBar+'')!='false',\n    'gallery-has-header':(isHeader+'')!='false',\n     'gallery-fade-in':(isAnimation+'')!='false'&&!isEventSource,\n     'gallery-inc-in':(isAnimation+'')!='false'&&isEventSource,\n     'lg':size=='lg',\n     'md':size=='md',\n     'sm':size=='sm',\n     'xs':size=='xs'\n     }\" [style.left]=\"isFullScreen?0:left\" [style.top]=\"isFullScreen?0:top\" [style.width]=\"isFullScreen?'100%':null\" [style.height]=\"isFullScreen?'100%':null\" [style.border]=\"isFullScreen?'none':null\" [style.transition]=\"transition?transition:null\">\n    <div *ngIf=\"(isHeader+'')!='false'\" class=\"gallery-header\">\n        {{title}}\n        <a class=\"gallery-btn-full\" *ngIf=\"size\" [ngClass]=\"{'resize':isFullScreen}\" (click)=\"toggleFullScreen()\">\n        </a>\n        <a class=\"gallery-btn-close\" (click)=\"close()\">×</a>\n    </div>\n    <div class=\"gallery-body\" #galleryBody>\n        <div class=\"gallery-sliders\" (click)=\"whiteSpaceClickAction()\">\n            <a class=\"gallery-img-container\" *ngFor=\"let img of images;let i=index\" [style.transform]=\"'rotate('+img.rotate+'deg)'\" [style.left.%]=\"activeIndex==i?0:(i-activeIndex)*200\" (mousemove)=\"onMouseMoveImg($event)\">\n                <img [src]=\"img.url\" [hidden]=\"!ready&&activeIndex!=i\" (click)=\"stopPropagation($event)\" [style.transform]=\"'scale('+img.scale+')'\" [style.left.px]=\"img.left\" [style.top.px]=\"img.top\" (mousedown)=\"onMouseDownImg($event)\" (mouseup)=\"onMouseUpImg($event)\"\n                />\n            </a>\n        </div>\n        <a class=\"gallery-close\" (click)=\"close()\" *ngIf=\"isShowBtns&&!((isHeader+'')!='false')\">×</a>\n        <a class=\"gallery-prev\" (click)=\"prev();slideThumbAfterChange(0)\" *ngIf=\"isShowBtns&&images.length>1\">‹</a>\n        <a class=\"gallery-next\" (click)=\"next();slideThumbAfterChange(1)\" *ngIf=\"isShowBtns&&images.length>1\">›</a>\n        <div class=\"gallery-thumb\" *ngIf=\"isShowBtns&&images.length>1\" [ngClass]=\"{'gallery-thumb-overflow':isThumbOverflow}\">\n            <div class=\"gallery-thumb-back\" (click)=\"slideThumb(galleryThumbSliders,0)\"></div>\n            <div class=\"gallery-thumb-sliders\" #galleryThumbSliders>\n                <div class=\"gallery-thumb-scroll\" [style.width]=\"isThumbOverflow?thumbScrollWidth+'px':'auto'\">\n\n                    <a class=\"gallery-thumb-slider\" *ngFor=\"let img of images;let i=index\" [ngClass]=\"{'active':i==activeIndex}\" (click)=\"activate(i)\">\n                        <img [src]=\"img.url\" [ngClass]=\"{'cover':isSupportCssObjectFit}\" />\n                    </a>\n                </div>\n            </div>\n            <div class=\"gallery-thumb-forward\" (click)=\"slideThumb(galleryThumbSliders,1)\"></div>\n        </div>\n        <div class=\"gallery-scale-info\" *ngIf=\"isShowScaleInfo&&images[activeIndex].scale!=1\">\n            {{images[activeIndex].scale|percent}}\n        </div>\n    </div>\n    <div class=\"gallery-footer\" *ngIf=\"(isToolsBar+'')!='false'\">\n        <div class=\"gallery-toolsbar\">\n            <a class=\"gallery-tool-item gallery-enlarge\" (click)=\"enlarge(0.1)\" title=\"放大\">\n            </a>\n            <a class=\"gallery-tool-item gallery-reduce\" (click)=\"reduce(0.1)\" title=\"缩小\">\n            </a>\n            <a class=\"gallery-tool-item gallery-rotate\" (click)=\"rotate()\" title=\"旋转\"></a>\n            <a class=\"gallery-tool-item gallery-download\" *ngIf=\"(isBtnDownload+'')!='false'\" (click)=\"download()\" title=\"下载\"></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/gallery/gallery.component.less":
/***/ (function(module, exports) {

module.exports = ".gallery {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 99999;\n  -webkit-transform: translate3d(0, 0, 0);\n  bottom: 36px;\n}\n.gallery.gallery-fade-in {\n  opacity: 0;\n}\n.gallery.gallery-fade-in.open {\n  opacity: 1;\n}\n.gallery.gallery-inc-in {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.gallery.gallery-inc-in.open {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n.gallery,\n.gallery * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gallery-sliders {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-align: center;\n}\n.gallery-sliders img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  cursor: pointer;\n}\n.gallery-btn-full span {\n  display: block;\n}\n.gallery .gallery-prev,\n.gallery .gallery-next {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.gallery-prev,\n.gallery-next {\n  position: absolute;\n  top: 50%;\n  left: 15px;\n  width: 40px;\n  height: 40px;\n  margin-top: -23px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 60px;\n  font-weight: 100;\n  line-height: 30px;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 0 2px #000;\n  text-align: center;\n  background: #222;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  border: 3px solid #fff;\n  border-radius: 23px;\n  opacity: 0.5;\n  cursor: pointer;\n  /* display: none;*/\n}\n.gallery-next {\n  left: auto;\n  right: 15px;\n}\n.gallery-prev:hover,\n.gallery-next:hover {\n  color: #fff;\n  opacity: 1;\n}\n.gallery-thumb {\n  position: absolute;\n  bottom: 2px;\n  width: 100%;\n  height: 40px;\n}\n.gallery-thumb img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.gallery-thumb img.cover {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.gallery-thumb-sliders {\n  width: 50%;\n  height: 40px;\n  margin: 0 auto;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.gallery-thumb-scroll {\n  width: 100%;\n  height: 100%;\n}\n.gallery-thumb-slider {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.gallery-thumb-slider:hover {\n  border-color: #ddd;\n}\n.gallery-thumb-slider.active,\n.gallery-thumb-slider.active:hover {\n  border-color: #ff8d00;\n}\n.gallery-thumb-back,\n.gallery-thumb-forward {\n  width: 20px;\n  height: 40px;\n  background-color: #080808;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  opacity: 0.5;\n  display: none;\n}\n.gallery-thumb-back:hover,\n.gallery-thumb-forward:hover {\n  opacity: 1;\n}\n.gallery-thumb-back {\n  left: 25%;\n  margin-left: -24px;\n}\n.gallery-thumb-forward {\n  left: 75%;\n  margin-left: 4px;\n}\n.gallery-thumb-back:after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-right-color: #999;\n  position: absolute;\n  left: 0;\n  top: 14px;\n}\n.gallery-thumb-forward:after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-left-color: #999;\n  position: absolute;\n  left: 8px;\n  top: 14px;\n}\n.gallery-thumb-overflow .gallery-thumb-forward,\n.gallery-thumb-overflow .gallery-thumb-back {\n  display: block;\n}\n.gallery-thumb-overflow .gallery-thumb-slider {\n  display: block;\n  float: left;\n}\n.gallery .gallery-header {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 36px;\n  line-height: 36px;\n  padding-left: 15px;\n  padding-right: 36px;\n  background-color: #fafafa;\n}\n.gallery .gallery-header .gallery-btn-close,\n.gallery .gallery-header .gallery-btn-full {\n  display: block;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.5;\n  width: 36px;\n  height: 36px;\n  font-size: 24px;\n  line-height: 34px;\n  color: #000;\n  font-weight: normal;\n}\n.gallery .gallery-header .gallery-btn-close:hover,\n.gallery .gallery-header .gallery-btn-full:hover {\n  opacity: 1;\n  background-color: #f0f0f0;\n}\n.gallery .gallery-header .gallery-btn-close:active,\n.gallery .gallery-header .gallery-btn-full:active {\n  background-color: #eee;\n}\n.gallery .gallery-header .gallery-btn-full:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 32%;\n  top: 32%;\n  width: 36%;\n  height: 36%;\n  border: 1px solid #333;\n}\n.gallery .gallery-header .gallery-btn-full:after.resize {\n  background-color: #fafafa;\n}\n.gallery .gallery-header .gallery-btn-full:after:hover {\n  background-color: #eee;\n}\n.gallery .gallery-header .gallery-btn-full.resize:before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 38%;\n  top: 24%;\n  width: 38%;\n  height: 38%;\n  border: 1px solid #000;\n}\n.gallery .gallery-header .gallery-btn-full.resize:after {\n  background-color: #fafafa;\n}\n.gallery .gallery-header .gallery-btn-close {\n  margin-left: -36px;\n}\n.gallery .gallery-header .gallery-btn-full {\n  margin-left: -72px;\n}\n.gallery .gallery-body {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.gallery.gallery-has-header .gallery-body {\n  top: 36px;\n}\n.gallery.gallery-has-footer .gallery-body {\n  bottom: 36px;\n}\n.gallery .gallery-img-container {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: left .5s, -webkit-transform .3s;\n  transition: left .5s, -webkit-transform .3s;\n  transition: left .5s, transform .3s;\n  transition: left .5s, transform .3s, -webkit-transform .3s;\n  cursor: default;\n}\n.gallery.lg,\n.gallery.md,\n.gallery.sm,\n.gallery.xs {\n  background-color: transparent;\n  border: 1px solid #ddd;\n  width: 0;\n  height: 0;\n}\n.gallery.open.lg,\n.gallery.gallery-fade-in.lg {\n  width: 80%;\n  height: 80%;\n}\n.gallery.open.md,\n.gallery.gallery-fade-in.md {\n  width: 60%;\n  height: 60%;\n}\n.gallery.open.sm,\n.gallery.gallery-fade-in.sm {\n  width: 40%;\n  height: 40%;\n}\n.gallery.open.xs,\n.gallery.gallery-fade-in.xs {\n  width: 25%;\n  height: 25%;\n}\n.gallery .gallery-close {\n  display: block;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  color: #fff;\n  font-size: 48px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.gallery .gallery-close:hover {\n  opacity: 1;\n}\n.gallery .gallery-footer {\n  width: 100%;\n  height: 36px;\n  background-color: #fafafa;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  cursor: pointer;\n}\n.gallery .gallery-enlarge {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAVlQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqFmfAQAAAHJ0Uk5TAB48Ukw0Dh2K2Pq9aAYLjvf9x3xTRFyV4d9Xzv6uKgFVkATm9lgHoKs4h4IFKwKvNRusEIAU8cCLMNnGgdXDPa3jVHXd7taU+1qqpZzwtQPrqTtpZ1b0OpEiERfi5BOPykOY8iBCmZOdEi/B/O/bqOwfaXudmAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAFgSURBVDjLrZFpXwFRFMYvGcWQZB1mDBJS0TJaRFFKq6Siok2b9jrf/0UzmdVM6kXPi3ufc5//vWfmdxD6V+n0fQbM+FPaP2ACTmbcYtWIB21D9mGHU+9ye7xA+NSP+0kqwHs6aIJQuCsfiYzKymgM4rTifX9kTHkjAePy0kbyTSeCkx2TTJFTUj4dmeHdLDC8S8/NS8CCPaACEAOLIpBZQmpAB1nJOjQAlFsW3Ao4tYB8QXCroGfXtSIrAta5bYM7Lm0KgAFc7Lq1zSoFOW7b4Y539wQAA7dWi3JRcEazRwPYrxyILO6l1UAVDkXgCI7VAFVLi4CVyES7gTp5IhuWD2L8jE7POqbRPL+Qj/MSEor5N67gWl6jcBwoqSWqNwFaihuIzpI3zG3n/6oUWbhrwb2SQBgOkMs/tMsVqIUeEa0m0BPzXHh5fXu3fH+eFqEUXYJ2sjfR+vhEvYlf8j/qC60wQzlGBaYSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTAyVDExOjA5OjU1KzA4OjAwbUTN8gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0wMlQxMTowOTo1NSswODowMBwZdU4AAABVdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3MwNHM2OXpkMGg5LyVFNiU5NCVCRSVFNSVBNCVBNy5zdmdu5UiCAAAAAElFTkSuQmCC);\n  background-size: 54%;\n}\n.gallery .gallery-reduce {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAUdQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzQoxCwAAAGx0Uk5TAB48Ukw0Dh2K2Pq9aAYLjvf9x3xTRFyV4d9Xzv6uKgFVkATm9lgHoKs4h4ICrzUbrBTxwIuAMNnGgdXDPa3jVHXd1pT7WqqlnPC1A+upO2lnVvQ6kRfi5BOPykOY8iBCmZOdEi/B/O/bqOwfNHRegwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAFESURBVDjLrVDrPwJBFB1po7YkvWu3UVYleSxWipbkmYQor/XKm/v/f9Zi3yM+OB/u75x7zty5Mwj9K/ps/XbK8ZM7MOgEGS7a7SHYQ95h34g/YAuGwhGIxqzD4wyb+OZ41AnJlMkf48Z1Mp2BLDbMj3MTxhM5mNRLL2O+ND/FTGtqhpu1LMXPzWtiwZewBJAAiyovLJE+DYoa9ZM+rrSssBUIkAJlUWGrYOvWtYqGdbld3VACdgh26+aWhm25vbOrBCgIka6oVRTmcIUJ/l59X+V0BFsDDThQ+SEcWQNsk1e5J1pIm/1j5kSnYpAx+a326Zlen0POsEbrAi4NB1JZYHnd/DaAZFwcF5kr4frrfQ2WEW8kuDU9jaIBSuW7Tq0OzeQ9wtYEehAexafnl1f353qkhBG4Cp1874T09o56J37x/4gPKY8205Li1UMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMDJUMTE6MDk6NTUrMDg6MDBtRM3yAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTAyVDExOjA5OjU1KzA4OjAwHBl1TgAAAFV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fczA0czY5emQwaDkvJUU3JUJDJUE5JUU1JUIwJThGLnN2Z/+kyYIAAAAASUVORK5CYII=);\n  background-size: 54%;\n}\n.gallery .gallery-download {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAHtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvXgcsAAAACh0Uk5TAJnMAV8gG+cp/BWAKv5rd+ktKOZt6i7uMy/rNO81MOw2MehhVoi7xNEWWXAAAAABYktHRACIBR1IAAAACXBIWXMAAABIAAAASABGyWs+AAAAn0lEQVQ4y+3Q2xKCIBAG4BU1qDSzEx21zMO+/xMWkEPYykVXXfTfsDP/B8wsgJsgAH8Y+4OvQRjFNIijUJ8T5IICgk9nZpojTz5BwtNFP2e4zIdgtU439rcMt7kL3F6L3TsQ3O2VkHsLDsdhr8WpB1SvxPliQEH2L/EERUn3WlwZu432amOyqqTdD/UG4vh9I/w9wL2GH0zTetNAh950D8JXErq3nJU1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTAyVDEwOjEzOjM0KzA4OjAwBmZZTQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0wMlQxMDoxMzozNCswODowMHc74fEAAABLdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX244Y3Bsd3lyamhmL2Rvd25sb2FkLnN2Z7KI2c8AAAAASUVORK5CYII=);\n  background-size: 40%;\n}\n.gallery .gallery-rotate {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQNnfwAAAHl0Uk5TAA5Zm8rq+vbjklYKJp31+dC0mKvM+/GZIEoWCYz9Vw9MrfeHCPx8JdMssCEMgjH4Xl306So67ecjNPPNEl+Ury0pwd0Fo7u3Nc/rtZwCkcnLmpBYUQ0LLv6NtrEbimBlgcc7OMgEGfDkImIYuC+zBxBSlqayzo7cxW1q9fMAAAABYktHRACIBR1IAAAACXBIWXMAAABIAAAASABGyWs+AAABb0lEQVQ4y4WQ6VsBURSHD8akLJNlKtlSo0EyNbQp7atUolCpCEVatHf/+zCJzOL3Ye49532fc88zAH+RyRWYEu9RYb19auBHo9Uhol+vNRhNJBoYHOK65uFfbLGSNqPdwRXqESc+OkbV265xrkW7kd7zb54XmSYAfGiyUfqVzFTnk9NsINgUaKVyhr+Uf3ZunhMsbkaAAyyEFpcaghWFQTBhtFwXNKQeRLJC1gWta1VMWHPVBJnOyCfU+kYjeE2QIztf2Nza5rKzCwpCBpLB9qQ5RPa7CISimxCVogdUlycOTXAkuSQWg2PCIc4dZBwSKCEunCAznAr96ma8oSRA1JYS48H0We1L4+diwgWRqR+X6EqYX6Ns46RyzI0Qz7OFIne7VUUEjPxdqdy8p1TMPW8+W6JbVSWHHh7bsecJFcrtjecsa3PKq1xRffGmiWyxY2TllUV47M0Qff9wodBnRmBrn91QCBDs13fcnGx1fwCbyj1+4IrcPQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNy0wMlQxMDoxMzozNCswODowMAZmWU0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDctMDJUMTA6MTM6MzQrMDg6MDB3O+HxAAAASnRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9uOGNwbHd5cmpoZi9yZWZyZXNoLnN2Z5DgT6AAAAAASUVORK5CYII=);\n  background-size: 40%;\n}\n.gallery .gallery-tool-item {\n  display: inline-block;\n  vertical-align: middle;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  line-height: 36px;\n  opacity: 0.75;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  color: #333;\n}\n.gallery .gallery-tool-item:hover {\n  opacity: 1;\n}\n.gallery-scale-info {\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  margin: 10px auto;\n  border-radius: 15px;\n  color: #fff;\n  padding: 4px 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(eleRef) {
        var _this = this;
        this.eleRef = eleRef;
        this.data = []; //图片数据源
        this.dataProps = []; //表示图片地址的访问属性  如[a,b,c]表示.a.b.c
        this.size = ''; //尺寸  xs md lg  默认全屏
        this.title = ''; //标题
        this.isAnimation = true; //是否有动画
        this.isHeader = false; //是否显示头部
        this.isToolsBar = false; //是否显示（底部）工具栏
        this.isBtnDownload = false; //是否显示下载按钮
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); //index change(将废弃)
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); //index change
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); //关闭
        this.isFullScreen = false; //是否全屏
        this.images = []; //图片属性
        this.render = false; //是否渲染
        this.visible = false; //是否显示
        this.ready = false; //是否已就绪
        this.width = null;
        this.height = null;
        this.left = 0; //当前left
        this.top = 0; //当前top
        this.tempLeft = 0; //临时left 用于全屏/非全屏切换
        this.tempTop = 0; //临时top
        this.thumbScrollWidth = 0; //临时滚动宽度
        this.transitionTime = 300; //过渡时间ms
        this.activeIndex = 0; //当前图片index
        this.transition = ''; //'all '+transitionTime+'ms'+' ease-in-out'
        this.isThumbOverflow = false; //是否缩略图溢出
        this.isEventSource = false; //是否有事件源
        this.isShowBtns = false; //是否显示工具栏
        this.isSupportCssObjectFit = false; //是否支持css object-fit属性
        this.isPressing = false; //是否在按着鼠标
        this.tween = {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        };
        this.bodyPadR = 0; //body paddingRight
        this.mousePosition = {
            x: 0,
            y: 0
        };
        this.mouseClickedPoint = {
            x: 0,
            y: 0
        };
        this.isShowScaleInfo = false; //是否显示缩放比例信息
        this.hideScaleInfoTimer = 0; //隐藏缩放比例信息的timer
        //窗口大小改变
        this.resizeHandler = function () {
            clearTimeout(_this.resizeCheckTimer);
            _this.resizeCheckTimer = setTimeout(function () {
                _this.checkIsThumbOverflow();
            }, 300);
        };
        //窗口点击
        this.windowClickHandler = function (ev) {
            if (!_this.size && !_this.isShowBtns) {
                _this.close();
            }
        };
        //按下键盘
        this.keydownHandler = function (ev) {
            if (_this.images.length > 1) {
                var kc = ev.keyCode;
                if (kc === 37 || kc === 38) {
                    _this.prev();
                    _this.slideThumbAfterChange(0);
                }
                else if (kc === 39 || kc === 40) {
                    _this.next();
                    _this.slideThumbAfterChange(1);
                }
            }
        };
        //鼠标滚动
        this.mouseWheelHandler = function (ev) {
            var e = ev || window.event;
            if (_this.visible) {
                //
                var mouseX = e['clientX'] || e['pageX'];
                var mouseY = e['clientY'] || e['pageY'];
                var gbody = _this.galleryBody;
                if (gbody && gbody.nativeElement) {
                    var rect = gbody.nativeElement.getBoundingClientRect();
                    if (mouseX > rect.left && mouseX < rect.right && mouseY > rect.top && mouseY < rect.bottom) {
                        if (e['wheelDelta'] < 0 || e['detail'] < 0) {
                            _this.reduce(0.1);
                        }
                        else if (e['wheelDelta'] > 0 || e['detail'] > 0) {
                            _this.enlarge(0.1);
                        }
                    }
                }
            }
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var elem = document.createElement('IMG');
        if (elem.style['objectFit'] !== undefined) {
            this.isSupportCssObjectFit = true;
        }
        elem = null;
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.removeEvents();
    };
    /**
     * 鼠标在图片上按下时
     * @param ev
     */
    GalleryComponent.prototype.onMouseDownImg = function (ev) {
        ev.preventDefault();
        var p = this.getMousePosition(ev);
        this.mousePosition.x = p.left;
        this.mousePosition.y = p.top;
        this.mouseClickedPoint.x = p.left;
        this.mouseClickedPoint.y = p.top;
        this.isPressing = true;
    };
    /**
     * 鼠标弹起
     * @param ev
     */
    GalleryComponent.prototype.onMouseUpImg = function (ev) {
        ev.stopPropagation();
        var p = this.getMousePosition(ev);
        if (p.left == this.mouseClickedPoint.x && p.top == this.mouseClickedPoint.y) {
            this.toggleShowTools();
        }
        this.isPressing = false;
    };
    /**
     * 鼠标在图片上移动
     * @param ev
     */
    GalleryComponent.prototype.onMouseMoveImg = function (ev) {
        ev.preventDefault();
        if (this.isPressing) {
            var p = this.getMousePosition(ev);
            var img = this.images[this.activeIndex];
            var x = 2 * (p.left - this.mousePosition.x) + img.left;
            var y = 2 * (p.top - this.mousePosition.y) + img.top;
            if (img.rotate % 360 == 90) {
                x = 2 * (p.top - this.mousePosition.y) + img.left;
                y = -2 * (p.left - this.mousePosition.x) + img.top;
            }
            else if (img.rotate % 360 == 180) {
                x = -2 * (p.left - this.mousePosition.x) + img.left;
                y = -2 * (p.top - this.mousePosition.y) + img.top;
            }
            else if (img.rotate % 360 == 270) {
                x = -2 * (p.top - this.mousePosition.y) + img.left;
                y = 2 * (p.left - this.mousePosition.x) + img.top;
            }
            img.left = x;
            img.top = y;
            this.mousePosition.x = p.left;
            this.mousePosition.y = p.top;
        }
    };
    /**
     * 禁止事件冒泡
     * @param ev
     */
    GalleryComponent.prototype.stopPropagation = function (ev) {
        ev.stopPropagation();
    };
    /**
     * 清除事件
     */
    GalleryComponent.prototype.removeEvents = function () {
        //取消监听
        window.removeEventListener('resize', this.resizeHandler);
        window.removeEventListener('click', this.windowClickHandler);
        window.removeEventListener('keydown', this.keydownHandler);
        window.removeEventListener('mousewheel', this.mouseWheelHandler);
        window.removeEventListener('DOMMouseScroll', this.mouseWheelHandler);
    };
    /**
     * 检查是否溢出
     */
    GalleryComponent.prototype.checkIsThumbOverflow = function () {
        var _this = this;
        var elem = this.eleRef.nativeElement.querySelector('.gallery-thumb-sliders');
        var check = function () {
            if (_this.images.length > 1) {
                if (elem && elem['offsetWidth'] > 0) {
                    _this.isThumbOverflow = elem && (elem.scrollWidth > elem.clientWidth);
                    if (_this.isThumbOverflow) {
                        var galleryThumbScroll = _this.eleRef.nativeElement.querySelector('.gallery-thumb-scroll');
                        var thumbSliders = galleryThumbScroll.querySelectorAll('.gallery-thumb-slider');
                        if (thumbSliders.length > 0) {
                            _this.thumbScrollWidth = thumbSliders[0]['offsetWidth'] * thumbSliders.length;
                            if (_this.thumbScrollWidth < elem.scrollWidth) {
                                _this.isThumbOverflow = false;
                            }
                        }
                    }
                }
                else {
                    setTimeout(check, 10);
                }
            }
        };
        check();
    };
    /**
     * 初始化图片数据
     * @param data
     * @param props
     */
    GalleryComponent.prototype.initImages = function (data, props) {
        this.images = [];
        if (data.length > 0) {
            var images = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var o = data_1[_i];
                var url = '';
                if (props.length > 0) {
                    url = this.getValueByProps(o, props);
                }
                else if (typeof o == 'string') {
                    url = o;
                }
                images.push({
                    url: url,
                    scale: 1,
                    rotate: 0,
                    left: 0,
                    top: 0
                });
            }
            this.images = images;
        }
    };
    /**
     * 改变显示图片后滑动（如果需要）缩略图
     * @param direction
     */
    GalleryComponent.prototype.slideThumbAfterChange = function (direction) {
        var _this = this;
        clearTimeout(this.thumbSlideTimer);
        this.thumbSlideTimer = setTimeout(function () {
            var sliderWrap = _this.eleRef.nativeElement.querySelector('.gallery-thumb-sliders');
            if (sliderWrap) {
                var perW = sliderWrap.offsetWidth;
                var scrollL = sliderWrap.scrollLeft;
                var sliderW = sliderWrap.clientWidth;
                if (direction === 0) {
                    var refValue = (_this.activeIndex) * perW;
                    if (scrollL > refValue) {
                        _this.slide(sliderWrap, refValue - scrollL);
                    }
                }
                else if (direction === 1) {
                    var validScrollLeft = perW * (_this.activeIndex + 1) - sliderW;
                    if (validScrollLeft > scrollL) {
                        _this.slide(sliderWrap, validScrollLeft - scrollL);
                    }
                }
            }
        });
    };
    /**
     * 缩略图滚动
     * @param elem
     * @param direction
     */
    GalleryComponent.prototype.slideThumb = function (elem, direction) {
        var val = 0;
        var thumbItem = elem.querySelector('.gallery-thumb-slider');
        var thumbItemWidth = thumbItem['offsetWidth'];
        if (direction == 0) {
            val = -elem.clientWidth;
        }
        else {
            val = Math.floor(elem.clientWidth / thumbItemWidth) * thumbItemWidth;
        }
        var canScrollVal = elem.scrollWidth - elem.scrollLeft;
        if (val > canScrollVal) {
            val = Math.floor((canScrollVal) / thumbItemWidth) * thumbItemWidth;
        }
        this.slide(elem, val);
    };
    /**
     * 滚动
     * @param elem 滚动的元素
     * @param val  滚动值
     */
    GalleryComponent.prototype.slide = function (elem, val) {
        var scrollLen = val;
        {
            var fps = 60; //帧数
            var run_time = 300; //执行时间
            var t_o = 1000 / fps; //每改变一次的时间间隔
            var t = 0; //开始时间
            var b = elem.scrollLeft; //初始值
            var c = scrollLen; //变化量
            var d = run_time / t_o; //次数
            var animate = this.tween.easeInOut; //选择算法
        }
        var timer = setInterval(function () {
            var newVal = Math.ceil(animate(t, b, c, d));
            elem.scrollLeft = newVal;
            if (t < d) {
                t++;
            }
            else {
                clearInterval(timer);
            }
        }, t_o);
    };
    /**
     * 通过属性名获取值
     * @param obj
     * @param pros
     * @returns any
     */
    GalleryComponent.prototype.getValueByProps = function (obj, pros) {
        var result = obj;
        for (var _i = 0, pros_1 = pros; _i < pros_1.length; _i++) {
            var prop = pros_1[_i];
            if (typeof result === 'object') {
                result = result[prop];
            }
        }
        return result;
    };
    /**
     * 打开
     */
    GalleryComponent.prototype.open = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.hideBodyScrollBar();
        this.render = true;
        this.isShowBtns = true;
        this.isFullScreen = false;
        this.isPressing = false;
        var dataIndex = 0; //索引
        var ev; //事件源
        var paramStrArr = []; //字符串数组参数容器
        var imgSrc = '';
        if (args && args.length > 0) {
            for (var i in args) {
                if (args[i] instanceof MouseEvent) {
                    ev = args[i];
                }
                if (typeof args[i] === 'number') {
                    dataIndex = args[i];
                }
                if (args[i] instanceof Array) {
                    paramStrArr.push(args[i]);
                }
                if (typeof args[i] === 'string') {
                    if (!imgSrc) {
                        imgSrc = args[i];
                    }
                    else {
                        this.title = args[i]; //title
                    }
                }
            }
        }
        var dataObj = this.data;
        var dataProps = this.dataProps;
        if (imgSrc !== '') {
            dataObj = [imgSrc];
            dataProps = [];
            dataIndex = 0;
        }
        else {
            if (paramStrArr.length > 0) {
                dataObj = paramStrArr[0];
            }
            if (paramStrArr.length > 1) {
                dataProps = paramStrArr[1];
            }
        }
        this.initImages(dataObj, dataProps);
        var maxIndex = dataObj.length - 1;
        this.activate(dataIndex > maxIndex ? maxIndex : dataIndex);
        if (ev) {
            this.isEventSource = true;
            var pos = this.getMousePosition(ev), scrollElem = document.documentElement || document.body, scrollLeft = scrollElem.scrollLeft, scrollTop = scrollElem.scrollTop;
            this.tempLeft = (pos.left - scrollLeft) + 'px';
            this.tempTop = (pos.top - scrollTop) + 'px';
            this.left = this.tempLeft;
            this.top = this.tempTop;
        }
        else {
            this.isEventSource = false;
            this.tempLeft = '0';
            this.tempTop = '0';
        }
        var isAnimation = ((this.isAnimation + '') != 'false');
        {
            var delay = isAnimation ? this.transitionTime : 0;
            setTimeout(function () {
                _this.ready = true; //就绪
                _this.checkIsThumbOverflow(); //检查是否溢出
            }, delay);
        }
        {
            if ((this.isAnimation + '') != 'false') {
                setTimeout(function () {
                    if (_this.isEventSource) {
                        _this.transition = 'all ' + _this.transitionTime + 'ms' + ' ease-in-out';
                    }
                    else {
                        _this.transition = 'opacity ' + _this.transitionTime + 'ms' + ' ease-in-out';
                    }
                    _this.show();
                }, 100);
            }
            else {
                this.show();
            }
        }
        this.addWindowListeners();
    };
    GalleryComponent.prototype.show = function () {
        var _this = this;
        setTimeout(function () {
            _this.visible = true;
            _this.setPositionAccordingSize();
        });
    };
    /**
     * 监听窗口事件
     */
    GalleryComponent.prototype.addWindowListeners = function () {
        var _this = this;
        //监听窗口大小变化
        window.addEventListener('resize', this.resizeHandler);
        //点击窗口空白处
        setTimeout(function () {
            window.addEventListener('click', _this.windowClickHandler);
        });
        //键盘控制
        setTimeout(function () {
            window.addEventListener('keydown', _this.keydownHandler);
        });
        //
        setTimeout(function () {
            window.addEventListener('mousewheel', _this.mouseWheelHandler);
            window.addEventListener('DOMMouseScroll', _this.mouseWheelHandler);
        });
    };
    /**
     * 根据尺寸设置位置
     */
    GalleryComponent.prototype.setPositionAccordingSize = function () {
        if (this.size == 'lg') {
            this.left = '10%';
            this.top = '10%';
        }
        else if (this.size == 'md') {
            this.left = '20%';
            this.top = '20%';
        }
        else if (this.size == 'sm') {
            this.left = '30%';
            this.top = '30%';
        }
        else if (this.size == 'xs') {
            this.left = '37.5%';
            this.top = '37.5%';
        }
        else {
            this.left = '0';
            this.top = '0';
        }
    };
    /**
     * 关闭
     */
    GalleryComponent.prototype.close = function () {
        var _this = this;
        this.reShowBodyScrollBar();
        this.visible = false;
        if (this.isEventSource) {
            this.left = this.tempLeft;
            this.top = this.tempTop;
        }
        this.ready = false;
        setTimeout(function () {
            _this.render = false;
            _this.transition = '';
        }, this.transitionTime);
        this.removeEvents();
        this.onClose.emit();
    };
    /**
     * 全屏切换
     */
    GalleryComponent.prototype.toggleFullScreen = function () {
        this.isFullScreen = !this.isFullScreen;
    };
    /**
     * 点击空白处
     */
    GalleryComponent.prototype.whiteSpaceClickAction = function () {
        if (!this.size) {
            this.close();
        }
    };
    /**
     * 最外层容器点击处理
     * @param ev
     */
    GalleryComponent.prototype.wrapClickAction = function (ev) {
        if (this.size) {
            ev.stopPropagation();
        }
    };
    /**
     * 上一张
     */
    GalleryComponent.prototype.prev = function () {
        if (this.activeIndex > 0) {
            this.activate(this.activeIndex - 1);
        }
    };
    /**
     * 下一张
     */
    GalleryComponent.prototype.next = function () {
        if (this.activeIndex < this.images.length - 1) {
            this.activate(this.activeIndex + 1);
        }
    };
    /**
     * 激活指定图片到当前窗口
     * @param index
     */
    GalleryComponent.prototype.activate = function (index) {
        this.activeIndex = index;
        this.change.emit(this.activeIndex);
        this.onChange.emit(this.activeIndex);
    };
    /**
     * 获取鼠标位置
     * @param e
     * @returns <{left: number; top: number}>
     */
    GalleryComponent.prototype.getMousePosition = function (e) {
        var m_x = e.pageX || (e.clientX +
            (document.documentElement.scrollLeft
                || document.body.scrollLeft));
        var m_y = e.pageY || (e.clientY +
            (document.documentElement.scrollTop
                || document.body.scrollTop));
        return { left: m_x, top: m_y };
    };
    /**
     * 显示/隐藏工具
     */
    GalleryComponent.prototype.toggleShowTools = function () {
        this.isShowBtns = !this.isShowBtns;
    };
    /**
     * 放大
     * @param val
     */
    GalleryComponent.prototype.enlarge = function (val) {
        var img = this.images[this.activeIndex];
        var scale = img.scale;
        scale += val;
        img.scale = scale;
        this.showScaleInfo();
    };
    /**
     * 缩小
     * @param val
     */
    GalleryComponent.prototype.reduce = function (val) {
        var img = this.images[this.activeIndex];
        var scale = img.scale;
        if (scale > 0.1) {
            scale -= val;
        }
        img.scale = scale;
        this.showScaleInfo();
    };
    /**
     * 显示缩放比例信息
     */
    GalleryComponent.prototype.showScaleInfo = function () {
        var _this = this;
        this.isShowScaleInfo = true;
        clearTimeout(this.hideScaleInfoTimer);
        this.hideScaleInfoTimer = setTimeout(function () {
            _this.isShowScaleInfo = false;
        }, 1000);
    };
    /**
     * 旋转
     */
    GalleryComponent.prototype.rotate = function () {
        var img = this.images[this.activeIndex];
        img.scale = 1;
        img.left = 0;
        img.top = 0;
        var rotate = img.rotate;
        rotate += 90;
        img.rotate = rotate;
    };
    /**
     * 下载
     */
    GalleryComponent.prototype.download = function () {
        var url = this.images[this.activeIndex].url;
        var iframe = document.createElement('IFRAME');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        iframe.setAttribute('src', url);
        setTimeout(function () {
            document.body.removeChild(iframe);
        }, 1000);
    };
    /**
     * 隐藏document.body的滚动条（如果有的话）
     */
    GalleryComponent.prototype.hideBodyScrollBar = function () {
        var orgW = document.body.offsetWidth; //有滚动条时的宽度
        document.body.style.overflowY = 'hidden';
        var curW = document.body.offsetWidth; //无滚动条时的宽度
        var padR = document.body.style.paddingRight.replace('px', '');
        if (padR) {
            this.bodyPadR = parseFloat(padR);
        }
        if (curW > orgW) {
            document.body.style.paddingRight = this.bodyPadR + (curW - orgW) + 'px'; //给body设置paddingRight避免页面抖动
        }
    };
    /**
     * 重新显示document.body的滚动条（如果有的话）
     */
    GalleryComponent.prototype.reShowBodyScrollBar = function () {
        document.body.style.overflowY = null;
        document.body.style.paddingRight = (this.bodyPadR ? this.bodyPadR + 'px' : null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "dataProps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], GalleryComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "isAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "isHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "isToolsBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "isBtnDownload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GalleryComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GalleryComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GalleryComponent.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('galleryBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], GalleryComponent.prototype, "galleryBody", void 0);
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gallery',
            template: __webpack_require__("./src/packages/dolphinng/src/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/gallery/gallery.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/gallery/gallery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_component__ = __webpack_require__("./src/packages/dolphinng/src/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_component__["a" /* GalleryComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_component__["a" /* GalleryComponent */]
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/layout/aside-left/aside-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-aside hidden-xs\" [ngClass]=\"{'bg-black':theme==='black',\n 'cerulean-outline':theme==='cerulean-outline',\n 'bg-white':theme==='white'\n }\">\n    <div class=\"aside-wrap\" [style.border-right]=\"!theme?'1px solid #ddd':null\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/aside-left/aside-left.component.less":
/***/ (function(module, exports) {

module.exports = ".app-aside /deep/ .glyphicon {\n  top: 0;\n}\n.cerulean-outline {\n  color: #23b7e5;\n}\n.cerulean-outline /deep/ .aside-wrap {\n  background-color: #fff;\n}\n.cerulean-outline /deep/ .navi-wrap a {\n  color: #23b7e5;\n  /*font-weight: bold;*/\n}\n.cerulean-outline /deep/ .text-muted {\n  color: #23b7e5;\n}\n.cerulean-outline /deep/ .aside-wrap {\n  /*border-right: 1px solid #ddd;*/\n  -webkit-box-shadow: 3px 0 5px #ddd;\n          box-shadow: 3px 0 5px #ddd;\n}\n.cerulean-outline /deep/ li.active > a,\n.cerulean-outline /deep/ .thirth-nav-item.active,\n.cerulean-outline /deep/ li.active > a:hover,\n.cerulean-outline /deep/ .thirth-nav-item.active:hover {\n  background-color: #dee5eb;\n  color: inherit;\n}\n.cerulean-outline /deep/ li.exist-children.active > a,\n.cerulean-outline /deep/ li.has-child.active > a {\n  background-color: transparent;\n  color: inherit;\n}\n.cerulean-outline /deep/ li > a:hover,\n.cerulean-outline /deep/ .thirth-nav-item:hover {\n  background-color: #f0f0f0;\n}\n.cerulean-outline /deep/ li.exist-children.active > a:hover,\n.cerulean-outline /deep/ li.has-child.active > a:hover {\n  background-color: #f0f0f0;\n}\n/deep/ .app-aside-folded .cerulean-outline .nav-sub {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-left: none;\n}\n/deep/ .app-aside-folded .cerulean-outline li.active > a > i {\n  background-color: #23b7e5;\n  color: #fff;\n}\n/deep/ .app-aside-folded.off-screen .cerulean-outline li.active > a > i {\n  background-color: transparent;\n  color: inherit;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/aside-left/aside-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideLeftComponent = /** @class */ (function () {
    function AsideLeftComponent() {
        this.theme = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], AsideLeftComponent.prototype, "theme", void 0);
    AsideLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'aside-left',
            template: __webpack_require__("./src/packages/dolphinng/src/layout/aside-left/aside-left.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/layout/aside-left/aside-left.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AsideLeftComponent);
    return AsideLeftComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-wrap {{'delete-wrap-'+size}}\">\n  <ng-content></ng-content>\n  <span class=\"delete-wrap-btn\" (click)=\"btnRemoveAction($event)\">\n      <i class=\"glyphicon glyphicon-remove\"></i>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.less":
/***/ (function(module, exports) {

module.exports = ".delete-wrap {\n  display: inline-block;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.delete-wrap-btn {\n  display: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  position: absolute;\n  left: 100%;\n  top: -18px;\n  margin-left: -18px;\n  cursor: pointer;\n  z-index: 1;\n  text-align: center;\n  line-height: 1.5;\n  font-size: 36px;\n  color: #fff;\n  background-color: #f05050;\n  /*color: #f05050;*/\n}\n.delete-wrap-btn:active {\n  /*color: #f02b2d;*/\n  background-color: #f02b2d;\n}\n.delete-wrap:hover .delete-wrap-btn {\n  display: block;\n}\n.delete-wrap.delete-wrap-lg .delete-wrap-btn {\n  width: 48px;\n  height: 48px;\n  top: -24px;\n  margin-left: -24px;\n  font-size: 36px;\n}\n.delete-wrap.delete-wrap-md .delete-wrap-btn {\n  width: 36px;\n  height: 36px;\n  top: -18px;\n  margin-left: -18px;\n  line-height: 1.66;\n  font-size: 24px;\n}\n.delete-wrap.delete-wrap-sm .delete-wrap-btn {\n  width: 24px;\n  height: 24px;\n  top: -12px;\n  margin-left: -12px;\n  font-size: 18px;\n}\n.delete-wrap.delete-wrap-xs .delete-wrap-btn {\n  width: 18px;\n  height: 18px;\n  top: -9px;\n  margin-left: -9px;\n  font-size: 12px;\n  text-indent: -0.5px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteWrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteWrapComponent = /** @class */ (function () {
    function DeleteWrapComponent() {
        this.size = 'md';
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DeleteWrapComponent.prototype.btnRemoveAction = function (event) {
        this.remove.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DeleteWrapComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DeleteWrapComponent.prototype, "remove", void 0);
    DeleteWrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'delete-wrap',
            template: __webpack_require__("./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteWrapComponent);
    return DeleteWrapComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header navbar\"\n[ngClass]=\"{'bg-black':theme==='black',\n           'bg-info':theme==='cerulean'\n           }\">\n  <ng-content></ng-content>\n</div>\n\n\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/header/header.component.less":
/***/ (function(module, exports) {

module.exports = ".bg-info.app-header {\n  /*box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);*/\n}\n.bg-info,\n.navbar-header.bg-info {\n  background-color: #0099cc;\n}\n.navbar-header.bg-info {\n  border-right: 1px solid #0091c2;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderLeftComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HeaderRightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.theme = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "theme", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("./src/packages/dolphinng/src/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/layout/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

var HeaderLeftComponent = /** @class */ (function () {
    function HeaderLeftComponent() {
        this.theme = '';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderLeftComponent.prototype, "theme", void 0);
    HeaderLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-left',
            template: "\n    <div class=\"navbar-header\" \n[ngClass]=\"{'bg-black':theme==='black',\n           'bg-info':theme==='cerulean'\n           }\">\n        <ng-content></ng-content>\n    </div>\n  ",
            styles: [__webpack_require__("./src/packages/dolphinng/src/layout/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderLeftComponent);
    return HeaderLeftComponent;
}());

var HeaderRightComponent = /** @class */ (function () {
    function HeaderRightComponent() {
        this.theme = 'black';
        this.dropDown = false;
    }
    HeaderRightComponent.prototype.toggleDropDown = function () {
        this.dropDown = !this.dropDown;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderRightComponent.prototype, "theme", void 0);
    HeaderRightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-right',
            template: "\n    <div class=\"collapse pos-rlt navbar-collapse box-shadow\" [ngClass]=\"{'show':dropDown,\n    'bg-black':theme==='black',\n     'bg-white-only':theme==='white'\n    }\">\n        <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], HeaderRightComponent);
    return HeaderRightComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_container_root_container_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/root-container/root-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aside_left_aside_left_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/aside-left/aside-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_wrap_delete_wrap_component__ = __webpack_require__("./src/packages/dolphinng/src/layout/delete-wrap/delete-wrap.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__root_container_root_container_component__["a" /* RootContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__aside_left_aside_left_component__["a" /* AsideLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["b" /* HeaderLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["c" /* HeaderRightComponent */],
                __WEBPACK_IMPORTED_MODULE_5__delete_wrap_delete_wrap_component__["a" /* DeleteWrapComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__root_container_root_container_component__["a" /* RootContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__aside_left_aside_left_component__["a" /* AsideLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["b" /* HeaderLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["c" /* HeaderRightComponent */],
                __WEBPACK_IMPORTED_MODULE_5__delete_wrap_delete_wrap_component__["a" /* DeleteWrapComponent */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/layout/root-container/root-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\"\n     [ngClass]=\"{'app-header-fixed':headerFixed,\n     'app-aside-fixed':asideFixed,\n     'app-aside-folded':asideFolded,\n     'app-aside-dock':asideDock,\n     'container':container,\n     'app-aside-slide':offScreen,\n     'off-screen':offScreen}\" >\n  <!--<div class=\"app  app-header-fixed app-aside-fixed app-aside-folded\">-->\n    <ng-content></ng-content>\n</div>\n\n\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/root-container/root-container.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/packages/dolphinng/src/layout/root-container/root-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootContainerComponent = /** @class */ (function () {
    function RootContainerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "headerFixed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "asideFixed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "asideFolded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "asideDock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootContainerComponent.prototype, "offScreen", void 0);
    RootContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'root-container',
            template: __webpack_require__("./src/packages/dolphinng/src/layout/root-container/root-container.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/layout/root-container/root-container.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], RootContainerComponent);
    return RootContainerComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBodyComponent = /** @class */ (function () {
    function ModalBodyComponent() {
        this.delayShow = false;
        this.isReady = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModalBodyComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalBodyComponent.prototype, "delayShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('modalBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ModalBodyComponent.prototype, "modalBody", void 0);
    ModalBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-body',
            template: "\n    <div class=\"modal-body{{styleClass?' '+styleClass:''}}\" #modalBody>\n        <ng-content *ngIf=\"isReady||!delayShow\"></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ModalBodyComponent);
    return ModalBodyComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalFooterComponent = /** @class */ (function () {
    function ModalFooterComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModalFooterComponent.prototype, "styleClass", void 0);
    ModalFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-footer',
            template: "\n    <div class=\"modal-footer{{styleClass?' '+styleClass:''}}\" >\n        <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ModalFooterComponent);
    return ModalFooterComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalHeaderComponent = /** @class */ (function () {
    function ModalHeaderComponent() {
        this.showCloseButton = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalHeaderComponent.prototype, "showCloseButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModalHeaderComponent.prototype, "styleClass", void 0);
    ModalHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-header',
            template: "\n    <div class=\"modal-header{{styleClass?' '+styleClass:''}}\" [ngClass]=\"{'modal-header-reduce':showCloseButton}\">\n        <ng-content></ng-content>\n    </div>\n  ",
            styles: [__webpack_require__("./src/packages/dolphinng/src/modal/modal.component.less")]
        })
    ], ModalHeaderComponent);
    return ModalHeaderComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal{{styleClass?' '+styleClass:''}}\" *ngIf=\"isRender\" [ngClass]=\"{'in':isShow,'fade':animated}\" (click)=\"bgClickAction($event)\" #modal [style.transition]=\"isTransition?'opacity .2s linear':'none'\">\n    <div class=\"modal-dialog{{this.size?' modal-'+this.size:''}}\" #modalDialog [style.transition]=\"isTransition?'transform .3s ease-out':'none'\" [style.width.px]=\"width\">\n        <div class=\"modal-content\" [class.disabled]=\"disabled\">\n            <a class=\"modal-btn-close\" *ngIf=\"showCloseButton\" (click)=\"close()\">\n                <span>&times;</span>\n            </a>\n            <ng-content></ng-content>\n            <ng-content select=\"modal-header\"></ng-content>\n            <ng-content select=\"modal-body\"></ng-content>\n            <ng-content select=\"modal-footer\"></ng-content>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal.component.less":
/***/ (function(module, exports) {

module.exports = ".modal {\n  /*background-color: rgba(0,0,0,0.5);*/\n  display: block;\n  position: fixed ;\n}\n.modal:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n/deep/ .modal .modal:before {\n  background-color: transparent;\n}\n.modal-content {\n  border-radius: 2px;\n}\n.modal-content.disabled:before {\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: wait;\n}\n.modal .modal-header {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.modal-header-reduce.modal-header {\n  padding-right: 48px;\n  position: relative;\n}\n.modal-btn-close {\n  display: block;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  margin-left: -48px;\n  text-align: center;\n  font-size: 36px;\n  opacity: 0.35;\n  z-index: 1;\n  line-height: 48px;\n}\n.modal-btn-close:hover {\n  opacity: 0.5;\n}\n.modal-btn-close:active {\n  opacity: 0.8;\n}\n/*================\n    滚动条begin\n================*/\n.modal *::-webkit-scrollbar {\n  width: 10px;\n}\n.modal *::-webkit-scrollbar-track-piece {\n  background: #f0f0f0;\n}\n.modal *::-webkit-scrollbar-thumb {\n  width: 12px;\n  background: rgba(125, 125, 125, 0.25);\n}\n.modal *::-webkit-scrollbar-thumb:hover {\n  background: rgba(125, 125, 125, 0.5);\n}\n/*\n滚动条end*/\n.modal-dialog {\n  max-width: 100%;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_body_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_header_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_footer_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-footer.component.ts");
/* unused harmony reexport ModalBodyComponent */
/* unused harmony reexport ModalHeaderComponent */
/* unused harmony reexport ModalFooterComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalComponent = /** @class */ (function () {
    function ModalComponent(elemRef) {
        this.elemRef = elemRef;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.overflow = false; //是否溢出屏幕
        this.animated = true;
        this.size = "md";
        this.disabled = false; //是否禁用（有遮罩）
        this.isRender = false; //是否渲染
        this.isShow = false; //是否显示
        this.isReady = false; //是否已就绪
        this.outClickClose = false; //点击外边关闭
        this.showCloseButton = true;
        this.isTransition = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.testAndResetBody();
    };
    /**
     * 背景点击处理
     */
    ModalComponent.prototype.bgClickAction = function (ev) {
        var wouldClose = this.outClickClose;
        if (wouldClose) {
            var target = ev.target || ev.srcElement;
            if (target === this.modal.nativeElement) {
                this.close();
            }
        }
    };
    ModalComponent.prototype.open = function () {
        this.visible = true;
        this.visibleChange.emit(true);
        this.showModal();
    };
    ModalComponent.prototype.close = function () {
        this.visible = false;
        var promise = this.hideModal();
        this.visibleChange.emit(false);
        return promise;
    };
    ModalComponent.prototype.showModal = function () {
        var _this = this;
        this.isRender = true;
        var orgW = document.body.offsetWidth; //有滚动条时的宽度
        this.addClass(document.body, 'modal-open');
        var curW = document.body.offsetWidth; //无滚动条时的宽度
        if (curW > orgW) {
            document.body.style.paddingRight = (curW - orgW) + 'px'; //给body设置paddingRight避免页面抖动
        }
        this.initBodyStyle();
        setTimeout(function () {
            _this.isTransition = true;
            _this.isShow = true;
            _this.onOpen.emit(_this.visible);
            setTimeout(function () {
                _this.isReady = true;
                _this.modalBody.isReady = true;
            }, 300);
        });
    };
    ModalComponent.prototype.hideModal = function (callback) {
        var _this = this;
        this.testAndResetBody();
        this.isShow = false;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.isRender = false;
                if (typeof callback === 'function') {
                    callback();
                }
                _this.isTransition = false;
                resolve(_this.visible);
                _this.isReady = false;
                _this.modalBody.isReady = false;
                _this.onClose.emit(_this.visible);
            }, 500);
        });
    };
    ModalComponent.prototype.testAndResetBody = function () {
        var modals = document.querySelectorAll('.modal');
        if (modals && modals.length <= 1) {
            this.removeClass(document.body, 'modal-open');
            document.body.style.paddingRight = null;
        }
    };
    ModalComponent.prototype.ngOnChanges = function (changes) {
        var visibleChg = changes['visible'];
        if (visibleChg) {
            var isVisible = visibleChg.currentValue;
            var prevValue = visibleChg.previousValue;
            if (isVisible !== prevValue) {
                if (isVisible === true) {
                    this.showModal();
                }
                else if (isVisible === false && prevValue !== undefined) {
                    this.hideModal();
                }
            }
        }
    };
    /**
     * 初始化modal-body的高度/限高
     */
    ModalComponent.prototype.initBodyStyle = function () {
        var _this = this;
        var isOverflow = !!this.overflow;
        var isFullHeight = (this.fullHeight !== undefined && this.fullHeight !== false);
        if (isFullHeight || !isOverflow) {
            setTimeout(function () {
                var modalBody = _this.modalBody.modalBody.nativeElement; //模态框中间部分
                var maxHeight = document.documentElement.clientHeight - 183; //上外边距30+下外边距30+头部51+底部70=181 2像素的调整
                if (isFullHeight) {
                    modalBody.style.height = maxHeight + 'px';
                    modalBody.style.overflowY = 'auto';
                }
                else if (!isOverflow) {
                    modalBody.style.maxHeight = maxHeight + 'px';
                    modalBody.style.overflowY = 'auto';
                }
            });
        }
    };
    /**
     * 为元素添加一个类
     * @param elem
     * @param className
     */
    ModalComponent.prototype.addClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        if (classList.indexOf(className) < 0) {
            classList.push(className);
            elem.className = classList.join(' ');
        }
    };
    /**
     * 删除某个类
     * @param elem
     * @param className
     */
    ModalComponent.prototype.removeClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        var clsIndex = classList.indexOf(className);
        if (clsIndex >= 0) {
            classList.splice(clsIndex, 1);
            elem.className = classList.join(' ');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalComponent.prototype, "visibleChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalComponent.prototype, "onOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalComponent.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "overflow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "fullHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "outClickClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "showCloseButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('modal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('modalDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ModalComponent.prototype, "modalDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__modal_header_component__["a" /* ModalHeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modal_header_component__["a" /* ModalHeaderComponent */])
    ], ModalComponent.prototype, "modalHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__modal_body_component__["a" /* ModalBodyComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modal_body_component__["a" /* ModalBodyComponent */])
    ], ModalComponent.prototype, "modalBody", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal',
            template: __webpack_require__("./src/packages/dolphinng/src/modal/modal.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/modal/modal.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_header_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_body_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_footer_component__ = __webpack_require__("./src/packages/dolphinng/src/modal/modal-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__modal_header_component__["a" /* ModalHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_body_component__["a" /* ModalBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modal_footer_component__["a" /* ModalFooterComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__modal_header_component__["a" /* ModalHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_body_component__["a" /* ModalBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__modal_footer_component__["a" /* ModalFooterComponent */]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-item/nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li routerLinkActive=\"{{link?'active':''}}\" [ngClass]=\"{'exist-children':haveChild,'disabled':disabled!==undefined&&disabled!==false}\" #root>\n    <a routerLink=\"{{link}}\" *ngIf=\"!!link&&!(disabled!==undefined&&disabled!==false)\">\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </a>\n    <a *ngIf=\"!link||(disabled!==undefined&&disabled!==false)\">\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </a>\n    <ul class=\"nav nav-sub dk\" #subWrap>\n        <li class=\"nav-item-title\">{{text}}</li>\n        <ng-content></ng-content>\n        <ng-container #childrenHost></ng-container>\n    </ul>\n</li>\n\n<ng-template #content>\n    <span class=\"pull-right text-muted\" *ngIf=\"haveChild\">\n    <i class=\"fa fa-fw fa-angle-right text\"></i>\n    <i class=\"fa fa-fw fa-angle-down text-active\"></i>\n</span>\n    <b class=\"pull-right {{badgeClass}}\" *ngIf=\"badgeValue\">{{badgeValue}}</b>\n    <i class=\"{{icon}}\"></i>\n    <span>{{text}}</span>\n</ng-template>"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-item/nav-item.component.less":
/***/ (function(module, exports) {

module.exports = ".disabled,\n.disabled * {\n  color: #999!important;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-item/nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_nav_item_sub_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavItemComponent = /** @class */ (function () {
    function NavItemComponent(elemRef, router, actRoute, componentFactoryResolver) {
        this.elemRef = elemRef;
        this.router = router;
        this.actRoute = actRoute;
        this.componentFactoryResolver = componentFactoryResolver;
        this.haveChild = false;
        this.childrenActive = false;
    }
    /**
     * 获取dom相对浏览器的位置
     * @param obj
     * @returns <{left: number, top: number}>
     */
    NavItemComponent.prototype.getPosition = function (obj) {
        var topValue = 0, leftValue = 0;
        while (obj) {
            leftValue += obj.offsetLeft;
            topValue += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return { left: leftValue, top: topValue };
    };
    NavItemComponent.prototype.activeNavItem = function () {
        this.addClass(this.rootElem, 'active');
    };
    NavItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rootElem = this.root.nativeElement;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                setTimeout(function () {
                    var url = event.url.split(';')[0];
                    //子导航收起
                    var subNavWrap = _this.subWrap.nativeElement;
                    var wouldActive = _this.isActive();
                    if (wouldActive) {
                        _this.openSubNav(subNavWrap);
                        (!_this.link) && _this.addClass(_this.rootElem, 'active');
                    }
                    else {
                        _this.closeSubNav(subNavWrap);
                        (!_this.link) && _this.removeClass(_this.rootElem, 'active');
                    }
                });
            }
        });
        this.rootElem.addEventListener('click', function (ev) {
            var isAsideFolded = _this.isAsideFolded();
            var linkElem = _this.rootElem.querySelector('a');
            if (linkElem.getAttribute('href') !== null) {
                return;
            }
            var subWrap = _this.subWrap.nativeElement;
            var wouldActive = (subWrap.clientHeight > 0 ? false : true);
            if (!_this.haveChild && _this.disabled !== undefined && _this.disabled + '' != 'false') {
                wouldActive = false;
            }
            if (!isAsideFolded) {
                if (wouldActive) {
                    _this.addClass(_this.rootElem, 'active');
                    _this.openSubNav(subWrap);
                }
                else {
                    _this.removeClass(_this.rootElem, 'active');
                    _this.closeSubNav(subWrap);
                }
            }
        });
        this.rootElem.addEventListener('mouseenter', function (ev) {
            var target = _this.rootElem;
            if (!_this.isAsideFolded()) {
                return;
            }
            if (!_this.hasClass(target, 'nav-item-hover')) {
                _this.addClass(target, 'nav-item-hover');
            }
            else {
                return;
            }
            var pos = _this.getPosition(target), wrapPos;
            var navWrap = document.querySelector('.navi-wrap');
            if (navWrap) {
                wrapPos = _this.getPosition(navWrap);
            }
            var subNavWrap = target.querySelector('.nav.nav-sub');
            var w = target.offsetWidth;
            var h = target.offsetHeight;
            var win_h = document.body.clientHeight;
            if (subNavWrap) {
                var subWrapHeight = subNavWrap.offsetHeight;
                var top_1 = pos.top;
                subNavWrap.style.left = pos.left + w + 'px';
                if (win_h - pos.top < subWrapHeight) {
                    if (win_h - pos.top + h < subWrapHeight) {
                        top_1 = wrapPos.top || 0; //50是头部高度
                    }
                    else {
                        top_1 = pos.top - subWrapHeight + h;
                    }
                }
                subNavWrap.style.top = top_1 + 'px';
                subNavWrap.style.maxHeight = win_h - wrapPos.top + 'px';
            }
            target = null;
        });
        this.rootElem.addEventListener('mouseleave', function (ev) {
            if (!_this.isAsideFolded()) {
                return;
            }
            var classList = _this.rootElem.className.split(/\s+/);
            if (classList.indexOf('nav-item-hover') >= 0) {
                _this.removeClass(_this.rootElem, 'nav-item-hover');
            }
            var subNavWrap = _this.rootElem.querySelector('.nav.nav-sub');
            if (subNavWrap) {
                subNavWrap.style.maxHeight = 'inherit';
            }
        });
    };
    NavItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkChild();
            if (_this.hasActiveChildren()) {
                _this.childrenActive = true;
                _this.addClass(_this.rootElem, 'active');
                _this.openSubNav(_this.rootElem.querySelector('.nav-sub'));
            }
        });
    };
    NavItemComponent.prototype.ngAfterViewChecked = function () {
    };
    NavItemComponent.prototype.openSubNav = function (subNavElem) {
        var _this = this;
        if (subNavElem) {
            if (this.isAsideFolded()) {
                subNavElem.style.height = 'auto';
            }
            else if (subNavElem.clientHeight <= 0) {
                setTimeout(function () {
                    var height = _this.getSubNavHeight(subNavElem);
                    subNavElem.style.height = height + 'px';
                    setTimeout(function () {
                        if (_this.hasClass(_this.rootElem, 'active')) {
                            subNavElem.style.height = 'auto';
                        }
                        else {
                            subNavElem.style.height = '0';
                        }
                    }, 300);
                });
            }
        }
    };
    NavItemComponent.prototype.closeSubNav = function (subNavElem) {
        if (subNavElem.clientHeight > 0) {
            var height = this.getSubNavHeight(subNavElem);
            subNavElem.style.height = height + 'px';
            setTimeout(function () {
                subNavElem.style.height = '0';
            });
        }
    };
    NavItemComponent.prototype.getSubNavHeight = function (subNavElem) {
        var height = 0;
        if (subNavElem) {
            var children = subNavElem.querySelectorAll('sub-nav-item>li');
            if (children) {
                for (var i = 0, len = children.length; i < len; i++) {
                    height += children[i].clientHeight;
                }
            }
        }
        return height;
    };
    NavItemComponent.prototype.hasActiveChildren = function () {
        var activeChildren = this.rootElem.querySelector('sub-nav-item li.active');
        return activeChildren !== null;
    };
    NavItemComponent.prototype.isAsideFolded = function () {
        var foldedElem = document.querySelector('.app.app-aside-folded');
        var isAsideFolded = foldedElem ? true : false;
        if (!isAsideFolded) {
            return false;
        }
        var classList = foldedElem.className.split(/\s+/);
        if (classList.indexOf('off-screen') >= 0) {
            var clientWidth = document.body.clientWidth;
            if (clientWidth < 768) {
                return false;
            }
        }
        return true;
    };
    NavItemComponent.prototype.isActive = function () {
        var active = false;
        if (this.link) {
            active = this.router.isActive(this.link, false);
        }
        else {
            /*if(this.elemRef.nativeElement.querySelector('.sub-nav-item.active')){
              active=true;
            }*/
            this.subNavItems.forEach(function (obj, index) {
                if (obj.isActive()) {
                    active = true;
                }
            });
        }
        return active;
    };
    /**
     * 检测是否有子组件
     */
    NavItemComponent.prototype.checkChild = function () {
        var child = this.elemRef.nativeElement.querySelector('sub-nav-item');
        if (child) {
            this.haveChild = true;
        }
    };
    /**
     * 元素是否包含某个类
     * @param elem
     * @param className
     * @returns boolean
     */
    NavItemComponent.prototype.hasClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        return classList.indexOf(className) >= 0;
    };
    /**
     * 为元素添加一个类
     * @param elem
     * @param className
     */
    NavItemComponent.prototype.addClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        if (classList.indexOf(className) < 0) {
            classList.push(className);
            elem.className = classList.join(' ');
        }
    };
    /**
     * 删除某个类
     * @param elem
     * @param className
     */
    NavItemComponent.prototype.removeClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        var clsIndex = classList.indexOf(className);
        if (clsIndex >= 0) {
            classList.splice(clsIndex, 1);
            elem.className = classList.join(' ');
        }
    };
    /**
     * 插入二级菜单
     * @param options
     */
    NavItemComponent.prototype.inserSubNavItem = function (options) {
        var viewContainerRef = this.childrenHost;
        var sNavComponentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__sub_nav_item_sub_nav_item_component__["a" /* SubNavItemComponent */]);
        var sNavComponentRef = viewContainerRef.createComponent(sNavComponentFactory);
        var sNavComponentInstance = sNavComponentRef.instance;
        sNavComponentInstance.text = options.text;
        options.icon && (sNavComponentInstance.icon = options.icon);
        options.link && (sNavComponentInstance.link = options.link);
        if (!this.subNavItems) {
            this.subNavItems = [];
        }
        this.subNavItems.push(sNavComponentInstance);
        return sNavComponentInstance;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('badge-class'),
        __metadata("design:type", String)
    ], NavItemComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('badge-value'),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "badgeValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('subWrap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NavItemComponent.prototype, "subWrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('root'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NavItemComponent.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('childrenHost', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */])
    ], NavItemComponent.prototype, "childrenHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__sub_nav_item_sub_nav_item_component__["a" /* SubNavItemComponent */]),
        __metadata("design:type", Array)
    ], NavItemComponent.prototype, "subNavItems", void 0);
    NavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-item',
            template: __webpack_require__("./src/packages/dolphinng/src/nav/nav-item/nav-item.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/nav/nav-item/nav-item.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navi-wrap\">\n  <nav class=\"navi\">\n    <ul class=\"nav\">\n      <ng-content></ng-content>\n    </ul>\n  </nav>\n</div>\n\n\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavWrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavWrapComponent = /** @class */ (function () {
    function NavWrapComponent(elemRef) {
        this.elemRef = elemRef;
        this.test = 'hellow';
    }
    NavWrapComponent.prototype.ngOnInit = function () {
        var elem = this.elemRef.nativeElement.querySelector('.navi');
    };
    NavWrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-wrap',
            template: __webpack_require__("./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], NavWrapComponent);
    return NavWrapComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/nav/nav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_wrap_nav_wrap_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/nav-wrap/nav-wrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_item_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/nav-item/nav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_nav_item_sub_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thirth_nav_item_thirth_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__nav_wrap_nav_wrap_component__["a" /* NavWrapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_item_nav_item_component__["a" /* NavItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sub_nav_item_sub_nav_item_component__["a" /* SubNavItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__thirth_nav_item_thirth_nav_item_component__["a" /* ThirthNavItemComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__nav_wrap_nav_wrap_component__["a" /* NavWrapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_item_nav_item_component__["a" /* NavItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sub_nav_item_sub_nav_item_component__["a" /* SubNavItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__thirth_nav_item_thirth_nav_item_component__["a" /* ThirthNavItemComponent */]
            ]
        })
    ], NavModule);
    return NavModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li routerLinkActive=\"{{link?'active':''}}\" class=\"sub-nav-item\" [ngClass]=\"{'has-child':hasChild,'disabled':disabled!==undefined&&disabled!==false}\">\n    <a routerLink=\"{{link}}\" *ngIf=\"!!link&&!(disabled!==undefined&&disabled!==false)\">\n        <i class=\"sub-nav-icon fa fa-caret-right\" *ngIf=\"hasChild\"></i>\n        <i class=\"sub-nav-icon fa fa-caret-down\" *ngIf=\"hasChild\"></i> {{text}}\n    </a>\n    <a *ngIf=\"!link||(disabled!==undefined&&disabled!==false)\">\n        <i class=\"sub-nav-icon fa fa-caret-right\" *ngIf=\"hasChild\"></i>\n        <i class=\"sub-nav-icon fa fa-caret-down\" *ngIf=\"hasChild\" style=\"margin-left: -18px\"></i> {{text}}\n    </a>\n    <div class=\"thirth-nav-wrap\">\n        <ng-content></ng-content>\n        <ng-container #childrenHost></ng-container>\n    </div>\n</li>"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.less":
/***/ (function(module, exports) {

module.exports = ".disabled,\n.disabled * {\n  color: #999!important;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubNavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thirth_nav_item_thirth_nav_item_component__ = __webpack_require__("./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubNavItemComponent = /** @class */ (function () {
    function SubNavItemComponent(elemRef, router, actRoute, componentFactoryResolver) {
        this.elemRef = elemRef;
        this.router = router;
        this.actRoute = actRoute;
        this.componentFactoryResolver = componentFactoryResolver;
        this.hasChild = false;
    }
    SubNavItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                var url = event.url.split(';')[0];
                //子导航收起
                // if(this.hasChild) {
                var li = _this.elemRef.nativeElement.querySelector('.sub-nav-item');
                var wouldActive = false;
                var thirthNavWrap = li ? li.querySelector('.thirth-nav-wrap') : null;
                //let matchStr='link="'+url;
                // wouldActive=(li&&li.innerHTML.match(matchStr));
                wouldActive = _this.isActive();
                if (wouldActive) {
                    _this.addClass(li, 'active');
                    thirthNavWrap && _this.openWrap(thirthNavWrap);
                }
                else {
                    //if (this.isAsideFolded()) {
                    thirthNavWrap && _this.closeWrap(thirthNavWrap);
                    _this.removeClass(li, 'active');
                    //}
                }
                //}
            }
        });
        this.elemRef.nativeElement.addEventListener('click', function (ev) {
            ev.stopPropagation();
            if (_this.hasChild) {
                var li = _this.elemRef.nativeElement.querySelector('.sub-nav-item');
                var linkElem = li.querySelector('a');
                if (linkElem.getAttribute('href') !== null) {
                    return;
                }
                var wouldActive = false;
                var thirthNavWrap = li ? li.querySelector('.thirth-nav-wrap') : null;
                wouldActive = (li && !_this.hasClass(li, 'active'));
                if (wouldActive) {
                    thirthNavWrap && _this.openWrap(thirthNavWrap);
                    _this.addClass(li, 'active');
                }
                else {
                    thirthNavWrap && _this.closeWrap(thirthNavWrap);
                    _this.removeClass(li, 'active');
                }
            }
        });
    };
    SubNavItemComponent.prototype.isActive = function () {
        var active = false;
        if (this.link) {
            active = this.router.isActive(this.link, false);
        }
        else {
            /*if(this.elemRef.nativeElement.querySelector('.thirth-nav-item.active')){
              active=true;
            }*/
            this.thirthNavItems.forEach(function (obj, index) {
                if (obj.isActive()) {
                    active = true;
                }
            });
        }
        return active;
    };
    SubNavItemComponent.prototype.openWrap = function (elem) {
        var org_h = elem.clientHeight, h = 0;
        var items = elem.querySelectorAll('.thirth-nav-item');
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            h += item.clientHeight;
        }
        if (elem.clientHeight < h) {
            elem.style.height = org_h + '';
            setTimeout(function () {
                elem.style.height = h + 'px';
                setTimeout(function () {
                    elem.style.height = null;
                }, 300);
            });
        }
    };
    SubNavItemComponent.prototype.closeWrap = function (elem) {
        elem.style.height = elem.clientHeight + 'px';
        setTimeout(function () {
            elem.style.height = '0';
            setTimeout(function () {
                elem.style.height = null;
            }, 300);
        });
    };
    SubNavItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.elemRef.nativeElement.querySelector('.thirth-nav-item')) {
                _this.hasChild = true;
                if (_this.elemRef.nativeElement.querySelector('.thirth-nav-item.active')) {
                    _this.addClass(_this.elemRef.nativeElement.querySelector('.sub-nav-item'), 'active');
                }
            }
        });
    };
    SubNavItemComponent.prototype.isAsideFolded = function () {
        var foldedElem = document.querySelector('.app.app-aside-folded');
        var isAsideFolded = foldedElem ? true : false;
        if (!isAsideFolded) {
            return false;
        }
        var classList = foldedElem.className.split(/\s+/);
        if (classList.indexOf('off-screen') >= 0) {
            var clientWidth = document.body.clientWidth;
            if (clientWidth < 768) {
                return false;
            }
        }
        return true;
    };
    /**
     * 元素是否包含某个类
     * @param elem
     * @param className
     * @returns boolean
     */
    SubNavItemComponent.prototype.hasClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        return classList.indexOf(className) >= 0;
    };
    /**
     * 为元素添加一个类
     * @param elem
     * @param className
     */
    SubNavItemComponent.prototype.addClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        if (classList.indexOf(className) < 0) {
            classList.push(className);
            elem.className = classList.join(' ');
        }
    };
    /**
     * 删除某个类
     * @param elem
     * @param className
     */
    SubNavItemComponent.prototype.removeClass = function (elem, className) {
        var classList = elem.className.split(/\s+/);
        var clsIndex = classList.indexOf(className);
        if (clsIndex >= 0) {
            classList.splice(clsIndex, 1);
            elem.className = classList.join(' ');
        }
    };
    SubNavItemComponent.prototype.inserThirthNavItem = function (options) {
        var viewContainerRef = this.childrenHost;
        var sNavComponentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__thirth_nav_item_thirth_nav_item_component__["a" /* ThirthNavItemComponent */]);
        var sNavComponentRef = viewContainerRef.createComponent(sNavComponentFactory);
        var sNavComponentInstance = sNavComponentRef.instance;
        sNavComponentInstance.text = options.text;
        options.icon && (sNavComponentInstance.icon = options.icon);
        options.link && (sNavComponentInstance.link = options.link);
        if (!this.thirthNavItems) {
            this.thirthNavItems = [];
        }
        this.thirthNavItems.push(sNavComponentInstance);
        return sNavComponentInstance;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SubNavItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SubNavItemComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SubNavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SubNavItemComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('childrenHost', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */])
    ], SubNavItemComponent.prototype, "childrenHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__thirth_nav_item_thirth_nav_item_component__["a" /* ThirthNavItemComponent */]),
        __metadata("design:type", Array)
    ], SubNavItemComponent.prototype, "thirthNavItems", void 0);
    SubNavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sub-nav-item',
            template: __webpack_require__("./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/nav/sub-nav-item/sub-nav-item.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], SubNavItemComponent);
    return SubNavItemComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thirth-nav-item\" [ngClass]=\"{'disabled':disabled!==undefined&&disabled!==false}\" routerLinkActive=\"{{link?'active':''}}\">\n    <span routerLink=\"{{link}}\" style=\"display:block\" *ngIf=\"!!link&&!(disabled!==undefined&&disabled!==false)\">{{text}}</span>\n    <span style=\"display:block\" *ngIf=\"!link||(disabled!==undefined&&disabled!==false)\">{{text}}</span>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.less":
/***/ (function(module, exports) {

module.exports = ".disabled,\n.disabled * {\n  color: #999!important;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirthNavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThirthNavItemComponent = /** @class */ (function () {
    function ThirthNavItemComponent(elemRef, router) {
        this.elemRef = elemRef;
        this.router = router;
        this.elemRef.nativeElement.addEventListener('click', function (ev) {
            ev.stopPropagation();
        });
    }
    ThirthNavItemComponent.prototype.isActive = function () {
        var active = false;
        if (this.link) {
            active = this.router.isActive(this.link, false);
        }
        return active;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ThirthNavItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ThirthNavItemComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ThirthNavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ThirthNavItemComponent.prototype, "disabled", void 0);
    ThirthNavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'thirth-nav-item',
            template: __webpack_require__("./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/nav/thirth-nav-item/thirth-nav-item.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ThirthNavItemComponent);
    return ThirthNavItemComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/null-replace/null-replace.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NullReplaceModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__null_replace_pipe__ = __webpack_require__("./src/packages/dolphinng/src/null-replace/null-replace.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NullReplaceModule = /** @class */ (function () {
    function NullReplaceModule() {
    }
    NullReplaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__null_replace_pipe__["a" /* NullReplacePipe */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__null_replace_pipe__["a" /* NullReplacePipe */]
            ]
        })
    ], NullReplaceModule);
    return NullReplaceModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/null-replace/null-replace.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NullReplacePipe = /** @class */ (function () {
    function NullReplacePipe() {
        this.fmt = '--';
    }
    NullReplacePipe.prototype.transform = function (value, fmt) {
        if (value === undefined || value === null || value === '') {
            var result = fmt || this.fmt;
            return result;
        }
        else {
            return value;
        }
    };
    NullReplacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'nullReplace' })
    ], NullReplacePipe);
    return NullReplacePipe;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/paginator/paginator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-wrap{{styleClass?' '+styleClass:''}}\">\n    <div class=\"pagination-text\" *ngIf=\"showTotal\" [ngClass]=\"{'pagination-text-sm':size==='sm'}\">\n        共<span>{{pageCount}}</span>页，<span>{{count}}</span>条记录\n    </div>\n    <div class=\"pagination-text\" *ngIf=\"changePageSizeAble\" [ngClass]=\"{'pagination-text-sm':size==='sm'}\">\n        每页\n        <select (change)=\"changePageSize($event)\" [value]=\"pageSize\">\n      <option [value]=\"opt\" *ngFor=\"let opt of pageSizeOptions\">{{opt}}</option>\n    </select> 条\n    </div>\n    <ul class=\"pagination\" [ngClass]=\"{'pagination-sm':size==='sm'}\">\n        <li [ngClass]=\"{'disabled':index===0}\" title=\"{{index===0?'已经是第一页':'首页'}}\"><a (click)=\"first()\"><i class=\"fa-step-backward fa\"></i></a></li>\n        <li [ngClass]=\"{'disabled':index<=0}\" title=\"{{index<=0?'已经是第一页':'上一页'}}\"><a (click)=\"prev()\"><i class=\"fa-angle-left fa\"></i></a></li>\n        <li (click)=\"changePage(items[0]-1)\" *ngIf=\"items[0]>0&&ellipsis\"><a>...</a></li>\n        <li [ngClass]=\"{'active':index===item}\" *ngFor=\"let item of items\" (click)=\"changePage(item)\"><a>{{item+1}}</a></li>\n        <li (click)=\"changePage(items[items.length-1]+1)\" *ngIf=\"items[items.length-1]<pageCount-1&&ellipsis  \"><a>...</a></li>\n        <li [ngClass]=\"{'disabled':index>=pageCount-1}\" title=\"{{index>=pageCount-1?'已经是第最后一页':'下一页'}}\"><a (click)=\"next()\"><i class=\"fa-angle-right fa\"></i></a></li>\n        <li [ngClass]=\"{'disabled':index>=pageCount-1}\" title=\"{{index>=pageCount-1?'已经是第最后一页':'最后一页'}}\"><a (click)=\"last()\"><i class=\"fa-step-forward fa\"></i></a></li>\n    </ul>\n    <div class=\"pagination-input\" *ngIf=\"inputAble\">\n        <div class=\"input-group\" [ngClass]=\"{'input-group-sm':size==='sm'}\">\n            <input class=\"form-control\" placeholder=\"页码\" [(ngModel)]=\"inputIndex\" name=\"inputIndex\" />\n            <a class=\"input-group-addon\" (click)=\"changePage(inputIndex-1)\">GO</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/paginator/paginator.component.less":
/***/ (function(module, exports) {

module.exports = "ul.pagination {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  float: left;\n  margin: 0;\n}\n.pagination-text {\n  float: left;\n  line-height: 34px;\n  padding-right: 10px;\n}\n.pagination-text.pagination-text-sm {\n  font-size: 12px;\n  line-height: 29px;\n}\n.pagination-wrap {\n  /*display: inline-block;*/\n}\n.pagination-wrap:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.pagination-input {\n  float: left;\n}\n.pagination-input a {\n  color: #428bca;\n}\n.pagination-input .input-group {\n  width: 105px;\n}\n.pagination-input .input-group.input-group-sm {\n  width: 90px;\n}\n.pagination-input .input-group .input-group-addon {\n  background-color: #fff;\n}\n.pagination-input .input-group .input-group-addon:hover {\n  background-color: #edf1f2;\n}\n.pagination-text select {\n  padding: 4px 6px;\n  border: 1px solid #ddd;\n}\n.pagination-text.pagination-text-sm select {\n  padding: 4px 4px;\n}\n.pagination-text span {\n  color: #ff6700;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n.input-group-addon {\n  border-radius: 0;\n}\n.input-group-sm > .form-control {\n  height: 29px;\n  border-radius: 0;\n}\n.input-group-sm .input-group-addon {\n  height: 29px;\n  padding: 4px 10px;\n}\n.pagination-input .form-control {\n  min-width: 0;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  background-color: #0099CC;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/paginator/paginator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent(elemRef) {
        this.elemRef = elemRef;
        this.count = 0; //总记录
        this.pageSize = 10; //每页大小
        this.pageSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.index = 0; //当前页
        this.indexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.items = []; //页码元素
        this.maximum = 5; //最多显示的按钮数
        this.changePageSizeAble = false; //是否可改变每页大小
        this.inputAble = false; //是否可输入
        this.ellipsis = true; //是否省略
        this.pageSizeOptions = [10, 30, 50, 100];
        this.size = ''; //控件尺寸
        this.showTotal = false; //显示文字信息
        this.onChangePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onChangePageError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PaginatorComponent.prototype.ngOnInit = function () {
        this.create();
        this.initPageSizeOptions();
    };
    PaginatorComponent.prototype.ngOnChanges = function (changes) {
        var countChg = changes['count'];
        var pageSizeChg = changes['pageSize'];
        if ((countChg && countChg.currentValue !== countChg.previousValue) || (pageSizeChg && pageSizeChg.currentValue !== pageSizeChg.previousValue)) {
            this.create();
        }
    };
    /**
     * 建立页码元素和页数
     */
    PaginatorComponent.prototype.create = function () {
        this.pageCount = Math.ceil(this.count / this.pageSize);
        var sIndex, eIndex;
        if (this.pageCount <= 0) {
            sIndex = 0;
            eIndex = 1;
        }
        else if (this.index > this.pageCount - 1) {
            this.index = this.pageCount - 1;
            this.indexChange.emit(this.index);
            eIndex = this.index + 1;
            sIndex = eIndex - this.maximum > 0 ? eIndex - this.maximum : 0;
        }
        else {
            sIndex = this.index;
            if (this.pageCount - 1 - this.index < this.maximum) {
                sIndex = this.pageCount - this.maximum;
            }
            if (sIndex < 0) {
                sIndex = 0;
            }
            eIndex = (sIndex + this.maximum <= this.pageCount) ? sIndex + this.maximum : this.pageCount;
        }
        this.createItems(sIndex, eIndex);
    };
    /**
     * 初始化每页大小选项
     */
    PaginatorComponent.prototype.initPageSizeOptions = function () {
        if (this.pageSizeOptions.indexOf(this.pageSize) < 0) {
            for (var i = 0, len = this.pageSizeOptions.length; i < len; i++) {
                if (this.pageSize <= this.pageSizeOptions[i]) {
                    if (i === 0) {
                        this.pageSizeOptions.unshift(this.pageSize);
                    }
                    else {
                        this.pageSizeOptions.splice(i, 0, this.pageSize);
                    }
                    break;
                }
            }
        }
    };
    PaginatorComponent.prototype.createItems = function (start, end) {
        if (start < 0) {
            start = 0;
        }
        this.items = [];
        for (var i = start; i < end; i++) {
            this.items.push(i);
        }
    };
    /**
     * 改变页大小
     * @param index
     */
    PaginatorComponent.prototype.changePageSize = function (ev) {
        var e = ev || window.event;
        var target = e.target || e.srcElement;
        var newSize = parseInt(target.value);
        this.pageSize = newSize;
        this.pageSizeChange.emit(newSize);
        this.create();
        this.onChangePage.emit(this.index);
    };
    /**
     * 改变页
     * @param index
     */
    PaginatorComponent.prototype.changePage = function (index) {
        if (index >= 0 && index < this.pageCount) {
            this.index = index;
            this.indexChange.emit(this.index);
            this.onChangePage.emit(this.index);
            if (this.items.indexOf(this.index) < 0) {
                var sIndex = void 0, eIndex = void 0;
                if (this.index < this.items[0]) {
                    var a = this.index - this.maximum + 1;
                    sIndex = (a > 0 ? a : 0);
                }
                else if (this.index > this.items[this.items.length - 1]) {
                    sIndex = this.index;
                    if (sIndex > this.pageCount - this.maximum) {
                        sIndex = this.pageCount - this.maximum;
                    }
                    if (sIndex < 0) {
                        sIndex = 0;
                    }
                }
                var b = this.pageCount - sIndex;
                eIndex = b > this.maximum ? sIndex + this.maximum : sIndex + b;
                this.createItems(sIndex, eIndex);
            }
        }
        else {
            var arg = (this.inputIndex !== undefined ? this.inputIndex : this.index);
            this.onChangePageError.emit(arg);
        }
    };
    /**
     * 上一页
     */
    PaginatorComponent.prototype.prev = function () {
        if (this.index > 0) {
            this.index--;
            this.changePage(this.index);
        }
    };
    /**
     * 下一页
     */
    PaginatorComponent.prototype.next = function () {
        if (this.index < this.pageCount - 1) {
            this.index++;
            this.changePage(this.index);
        }
    };
    /**
     * 第一页
     */
    PaginatorComponent.prototype.first = function () {
        if (this.index !== 0) {
            this.index = 0;
            this.changePage(this.index);
        }
    };
    /**
     * 最后一页
     */
    PaginatorComponent.prototype.last = function () {
        if (this.index !== this.pageCount - 1) {
            this.index = this.pageCount - 1;
            this.changePage(this.index);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PaginatorComponent.prototype, "pageSizeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PaginatorComponent.prototype, "indexChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "maximum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginatorComponent.prototype, "changePageSizeAble", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginatorComponent.prototype, "inputAble", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginatorComponent.prototype, "ellipsis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], PaginatorComponent.prototype, "pageSizeOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PaginatorComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginatorComponent.prototype, "showTotal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PaginatorComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PaginatorComponent.prototype, "onChangePage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PaginatorComponent.prototype, "onChangePageError", void 0);
    PaginatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paginator',
            template: __webpack_require__("./src/packages/dolphinng/src/paginator/paginator.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/paginator/paginator.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/paginator/paginator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginator_component__ = __webpack_require__("./src/packages/dolphinng/src/paginator/paginator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaginatorModule = /** @class */ (function () {
    function PaginatorModule() {
    }
    PaginatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__paginator_component__["a" /* PaginatorComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__paginator_component__["a" /* PaginatorComponent */]
            ]
        })
    ], PaginatorModule);
    return PaginatorModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"q-btn-group\">\n  <div class=\"q-btn\" (click)=\"goTop()\">\n    <i class=\"q-btn-icon fa fa-chevron-up\"></i>\n    <span class=\"q-btn-text\">回到顶部</span>\n  </div>\n  <div class=\"q-btn\" (click)=\"back()\">\n    <i class=\"q-btn-icon fa fa-chevron-left\"></i>\n    <span class=\"q-btn-text\">返回</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.less":
/***/ (function(module, exports) {

module.exports = ".q-btn-group {\n  position: fixed;\n  width: 50px;\n  height: 101px;\n  right: 0;\n  bottom: 50%;\n  font-size: 12px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.q-btn {\n  width: 100%;\n  height: 50px;\n  margin-bottom: 1px;\n  text-align: center;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.q-btn:last-child {\n  border-bottom: none;\n}\n.q-btn-icon {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  line-height: 50px;\n  font-size: 24px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-transition: top .3s;\n  transition: top .3s;\n  cursor: pointer;\n}\n.q-btn-text {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-transition: top .3s;\n  transition: top .3s;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.q-btn:last-child .q-btn-text {\n  line-height: 36px;\n}\n.q-btn-text:active {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.q-btn:hover .q-btn-text {\n  top: 0;\n}\n.q-btn:hover .q-btn-icon {\n  top: -100%;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QBtnGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QBtnGroupComponent = /** @class */ (function () {
    function QBtnGroupComponent() {
    }
    QBtnGroupComponent.prototype.goTop = function () {
        {
            if (document.documentElement) {
                document.documentElement.scrollTop = 0;
            }
            if (document.body) {
                document.body.scrollTop = 0;
            }
        }
    };
    QBtnGroupComponent.prototype.back = function () {
        history.back();
    };
    QBtnGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'q-btn-group',
            template: __webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], QBtnGroupComponent);
    return QBtnGroupComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/q-btn-group/q-btn-group.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QBtnGroupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__q_btn_group_component__ = __webpack_require__("./src/packages/dolphinng/src/q-btn-group/q-btn-group.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QBtnGroupModule = /** @class */ (function () {
    function QBtnGroupModule() {
    }
    QBtnGroupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__q_btn_group_component__["a" /* QBtnGroupComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__q_btn_group_component__["a" /* QBtnGroupComponent */]
            ]
        })
    ], QBtnGroupModule);
    return QBtnGroupModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/radio/radio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" {{display==='block'?'radio':'radio-inline'}}\">\n  <label  class=\"{{styleClass!=='none'?styleClass:''}}\"\n    (click)=\"toggleCheck($event)\" [ngClass]=\"{'i-checks':this.styleClass!=='none','i-checks-sm':size==='sm','i-checks-lg':size==='lg'}\">\n    <input type=\"radio\"  [disabled]=\"disabled\" [checked]=\"key===value\" (click)=\"changeValue($event)\" [value]=\"value\"/>\n    <i [style.border-color]=\"key===value&&customBackground?customBackground:null\">\n      <span class=\"radio-inner\" [style.background-color]=\"(key===value&&customBackground)?customBackground:null\"></span>\n    </i>\n    <ng-content></ng-content>\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/radio/radio.component.less":
/***/ (function(module, exports) {

module.exports = ".radio,\n.radio-inline {\n  padding-right: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"] {\n  position: relative;\n  margin-top: 0;\n  margin-left: 0;\n  top: 2px;\n}\n.i-checks i:before {\n  content: none;\n}\n.i-checks input + i .radio-inner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0;\n  height: 0;\n  background-color: transparent;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.i-checks input[disabled]:checked + i {\n  border-color: #cfdadd!important;\n}\n.i-checks input[disabled]:checked + i .radio-inner {\n  background-color: #cfdadd!important;\n}\n.i-checks input:checked + i .radio-inner {\n  left: 4px;\n  top: 4px;\n  width: 10px;\n  height: 10px;\n  background-color: #23b7e5;\n  border-radius: 50%;\n}\n.i-checks-sm input:checked + i .radio-inner {\n  left: 3px;\n  top: 3px;\n  width: 8px;\n  height: 8px;\n}\n.i-checks-lg input:checked + i .radio-inner {\n  left: 8px;\n  top: 8px;\n  width: 12px;\n  height: 12px;\n}\nlabel.i-checks {\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/radio/radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioComponent = /** @class */ (function () {
    function RadioComponent(elemRef) {
        this.elemRef = elemRef;
        this.keyChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.toggleCheck = function (ev) {
        if (!this.disabled) {
            var target = ev.target || ev.srcElement;
            if (target.nodeName !== 'INPUT') {
                this.keyChange.emit(this.value);
            }
        }
    };
    RadioComponent.prototype.changeValue = function (ev) {
        ev.stopPropagation();
        if (!this.disabled) {
            this.keyChange.emit(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], RadioComponent.prototype, "keyChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "customBackground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "name", void 0);
    RadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radio',
            template: __webpack_require__("./src/packages/dolphinng/src/radio/radio.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/radio/radio.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/radio/radio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_component__ = __webpack_require__("./src/packages/dolphinng/src/radio/radio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RadioModule = /** @class */ (function () {
    function RadioModule() {
    }
    RadioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__radio_component__["a" /* RadioComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__radio_component__["a" /* RadioComponent */]
            ]
        })
    ], RadioModule);
    return RadioModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/select/select.Module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_component__ = __webpack_require__("./src/packages/dolphinng/src/select/select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_component__["a" /* SelectComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__select_component__["a" /* SelectComponent */]
            ]
        })
    ], SelectModule);
    return SelectModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nx-select{{styleClass?' '+styleClass:''}}\">\n    <ng-content select=\"select\">\n\n    </ng-content>\n    <div class=\"nx-select-body\" #body *ngIf=\"visible\">\n        <span class=\"nx-select-text\">{{text}}</span>\n        <div class=\"nx-select-arrow\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/packages/dolphinng/src/select/select.component.less":
/***/ (function(module, exports) {

module.exports = ".nx-select,\n.nx-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.nx-select {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.nx-select-body {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: 1px solid transparent;\n  padding-right: 20px;\n  background-color: #fff;\n  white-space: nowrap;\n}\n.nx-select /deep/ select {\n  position: relative;\n  z-index: 1;\n  opacity: 0;\n}\n.nx-select /deep/ select + .nx-select-body {\n  border-color: #ddd;\n}\n.nx-select /deep/ select:focus + .nx-select-body {\n  border-color: #24B6E4;\n}\n.nx-select /deep/ select:focus + .nx-select-body .nx-select-arrow {\n  border-top-color: #24B6E4;\n}\n.nx-select-arrow {\n  width: 0;\n  height: 0;\n  border-top: 5px solid #666;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: none;\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  margin-top: -3px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
 * nx-select
 * @author Qingyu Wei
 */

var SelectComponent = /** @class */ (function () {
    function SelectComponent(elemRef) {
        this.elemRef = elemRef;
        this.visible = false;
        this.initializedStyle = false;
        this.text = '';
    }
    SelectComponent.prototype.ngOnChanges = function (changes) {
        var valChg = changes['value'];
        if (valChg) {
            this.text = this.matchText(valChg.currentValue, this.options);
        }
    };
    SelectComponent.prototype.ngAfterContentInit = function () {
        this.visible = true;
        this.setDefaultStyle();
    };
    SelectComponent.prototype.ngAfterContentChecked = function () {
        this.setDefaultStyle();
    };
    SelectComponent.prototype.setDefaultStyle = function () {
        if (!this.initializedStyle && this.body) {
            var select = this.elemRef.nativeElement.querySelector('select');
            if (select) {
                //lineHeight
                var elem = this.body.nativeElement;
                var rect = elem.getBoundingClientRect();
                this.body.nativeElement.style.lineHeight = rect.bottom - rect.top - 2 + "px";
                //paddingRight
                var padLeft = this.getCss(select, 'paddingLeft');
                if (padLeft) {
                    elem.style.paddingLeft = padLeft;
                }
                this.initializedStyle = true;
            }
        }
    };
    /**
     * 获取元素生效的css属性值
     * @param elem
     * @param attr
     */
    SelectComponent.prototype.getCss = function (elem, attr) {
        if (elem && typeof elem === 'object' && attr && typeof attr === 'string') {
            if (typeof document.defaultView.getComputedStyle == 'function') {
                if (attr === 'float') {
                    attr = 'cssFloat';
                }
                return document.defaultView.getComputedStyle(elem, null)[attr];
            }
            else if (elem.currentStyle && typeof elem.currentStyle === 'object') {
                if (attr === 'float') {
                    attr = 'styleFloat';
                }
                return elem.currentStyle[attr];
            }
        }
    };
    /**
     * 匹配文字
     * @param val
     * @param options
     */
    SelectComponent.prototype.matchText = function (val, options) {
        var text = '';
        if (options instanceof Array) {
            if (this.valueKey && typeof this.valueKey == 'string') {
                if (this.textKey && typeof this.textKey == 'string') {
                    for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                        var o = options_1[_i];
                        if (o && typeof o == 'object' && val === o[this.valueKey]) {
                            text = o[this.textKey];
                        }
                    }
                }
            }
        }
        return text;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "valueKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "textKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('body'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SelectComponent.prototype, "body", void 0);
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nx-select',
            template: __webpack_require__("./src/packages/dolphinng/src/select/select.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/select/select.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/services/pop/pop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_popup_service__ = __webpack_require__("./src/packages/dolphinng/src/services/popup/popup.service.ts");
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

var PopService = /** @class */ (function (_super) {
    __extends(PopService, _super);
    function PopService() {
        return _super.call(this) || this;
    }
    return PopService;
}(__WEBPACK_IMPORTED_MODULE_0__popup_popup_service__["a" /* PopupService */]));



/***/ }),

/***/ "./src/packages/dolphinng/src/services/popup/popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
var PopupService = /** @class */ (function () {
    function PopupService() {
        this.animated = true;
        this.eventList = [];
    }
    /**
     * 初始化
     */
    PopupService.prototype.init = function () {
        this.removePop();
        this.clearEvents();
        this.type = 'info';
        this.title = '提示';
        this.text = '';
        this.confirmButtonText = '确定';
        this.cancelButtonText = '取消';
        this.showConfirmButton = true;
        this.showCancelButton = false;
        this.confirmButtonType = 'info';
        this.textAlign = 'center';
        this.cancelButtonType = 'default';
        this.closeOnConfirm = true;
        this.closeOnCancel = true;
        this.showLoaderOnConfirm = false;
        this.showLoaderOnCancel = false;
        this.confirmLoaderText = this.confirmButtonText;
        this.cancelLoaderText = this.cancelButtonText;
        this.confirmed = false;
        this.canceled = false;
        this.confirmHandlers = [];
        this.cancelHandlers = [];
        this.closeHandlers = [];
        this.confirmButton = null;
        this.cancelButton = null;
        this.closeButton = null;
        this.popWrap = null;
    };
    /**
     * 显示
     */
    PopupService.prototype.show = function () {
        var _this = this;
        //蒙层
        this.popWrap = document.createElement('DIV');
        this.popWrap.className = 'pop-wrap' + ' ' + this.type;
        document.body.appendChild(this.popWrap);
        //内容块
        var pop = document.createElement('DIV');
        pop.className = 'pop-main';
        //pop头部
        var popHeader = document.createElement('DIV');
        popHeader.className = 'pop-header';
        popHeader.innerHTML = '<div class="alert-title">' + this.title + '</div>';
        //pop关闭按钮
        this.closeButton = document.createElement('span');
        this.closeButton.className = 'pop-btn-close';
        this.closeButton.innerHTML = '×';
        this.addEvent(this.closeButton, 'click', function () {
            _this.close();
            for (var _i = 0, _a = _this.closeHandlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                handler.apply(_this);
            }
        });
        popHeader.appendChild(this.closeButton);
        pop.appendChild(popHeader);
        //pop body
        var popBody = document.createElement('DIV');
        popBody.className = 'pop-body';
        if (this.textAlign === 'center') {
            popBody.className = 'pop-body pop-body-txt-center';
        }
        //icon
        var popIcon = document.createElement('DIV');
        popIcon.className = 'pop-icon';
        //text
        var iconHTML = (this.iconClass !== undefined && this.iconClass !== '') ? '<i class="' + this.iconClass + '"></i>' : '';
        var popText = document.createElement('DIV');
        popText.className = 'pop-text';
        popText.innerHTML = iconHTML + this.text;
        popBody.appendChild(popText);
        pop.appendChild(popBody);
        // pop footer
        var popFooter = document.createElement('DIV');
        popFooter.className = 'pop-footer';
        // let dottingHTML='<i class="dotting"></i>';//loader
        var dottingHTML = '...'; //loader
        if (this.showConfirmButton) {
            var btnConfirm_1 = document.createElement('BUTTON');
            var btnConfirmClassList_1 = ['btn', 'btn-' + this.confirmButtonType];
            btnConfirm_1.className = btnConfirmClassList_1.join(' ');
            btnConfirm_1.innerHTML = this.confirmButtonText;
            popFooter.appendChild(btnConfirm_1);
            this.confirmButton = btnConfirm_1;
            this.addEvent(btnConfirm_1, 'click', function () {
                if (_this.confirmed || _this.canceled) {
                    _this.close();
                    return;
                }
                if (_this.closeOnConfirm) {
                    _this.close();
                }
                else if (_this.showLoaderOnConfirm) {
                    btnConfirmClassList_1.push('disabled');
                    btnConfirm_1.className = btnConfirmClassList_1.join(' ');
                    btnConfirm_1.innerHTML = _this.confirmLoaderText + dottingHTML;
                }
                for (var _i = 0, _a = _this.confirmHandlers; _i < _a.length; _i++) {
                    var handler = _a[_i];
                    handler.apply(_this);
                }
                _this.confirmed = true;
            });
        }
        if (this.showCancelButton) {
            var btnCancel_1 = document.createElement('BUTTON');
            var btnCancelClassList_1 = ['btn', 'btn-' + this.cancelButtonType];
            btnCancel_1.className = btnCancelClassList_1.join(' ');
            btnCancel_1.innerHTML = this.cancelButtonText;
            popFooter.appendChild(btnCancel_1);
            this.addEvent(btnCancel_1, 'click', function () {
                if (_this.canceled || _this.confirmed) {
                    _this.close();
                    return;
                }
                if (_this.closeOnCancel) {
                    _this.close();
                }
                else if (_this.showLoaderOnCancel) {
                    btnCancelClassList_1.push('disabled');
                    btnCancel_1.className = btnCancelClassList_1.join(' ');
                    btnCancel_1.innerHTML = _this.cancelLoaderText + dottingHTML;
                }
                for (var _i = 0, _a = _this.cancelHandlers; _i < _a.length; _i++) {
                    var handler = _a[_i];
                    handler.apply(_this);
                }
                _this.canceled = true;
            });
            this.cancelButton = btnCancel_1;
        }
        pop.appendChild(popFooter);
        this.popWrap.appendChild(pop);
        if (this.animated) {
            setTimeout(function () {
                _this.popWrap.className = _this.popWrap.className + ' animate';
                setTimeout(function () {
                    _this.popWrap.className = _this.popWrap.className + ' ready';
                }, 10);
            }, 10);
        }
        else {
            this.popWrap.className = this.popWrap.className + ' ready';
        }
    };
    /**
     * 关闭
     */
    PopupService.prototype.close = function () {
        this.removePop();
    };
    /**
     * 移除
     */
    PopupService.prototype.removePop = function () {
        if (this.popWrap !== null && this.popWrap !== undefined) {
            try {
                document.body.removeChild(this.popWrap);
            }
            catch (err) {
                //ignore
            }
        }
    };
    /**
     * 设置参数
     * @param opt
       */
    PopupService.prototype.setOptions = function (opt) {
        for (var prop in opt) {
            this[prop] = opt[prop];
        }
    };
    PopupService.prototype.getArgs = function (arg) {
        var strs = [], opts = { text: '' };
        if (arguments.length) {
            for (var i = 0, len = arguments.length; i < len; i++) {
                var arg_1 = arguments[i][0];
                if (typeof arg_1 === 'string') {
                    strs.push(arg_1);
                }
                else if (arg_1 && typeof arg_1 === 'object') {
                    for (var o in arg_1) {
                        opts[o + ''] = arg_1[o + ''];
                    }
                }
            }
        }
        if (strs.length > 0) {
            opts.text = strs[0];
        }
        if (strs.length > 1) {
            opts.title = strs[1];
        }
        return opts;
    };
    /**
     * 打开确认框
     * @param text
     * @param title
     * @param opt
     * @returns PopupService
     */
    PopupService.prototype.confirm = function (text, title, opt) {
        this.init();
        this.type = 'confirm';
        this.showConfirmButton = true;
        this.showCancelButton = true;
        var options = this.getArgs(arguments);
        this.setOptions(options);
        this.show();
        return this;
    };
    /**
     * 打开消息框
     * @param text
     * @param title
     * @param opt
     * @returns PopupService
     */
    PopupService.prototype.info = function (text, title, opt) {
        this.init();
        this.type = 'info';
        this.showConfirmButton = true;
        this.showCancelButton = false;
        var options = this.getArgs(arguments);
        this.setOptions(options);
        this.show();
        return this;
    };
    /**
     * 打开错误消息框
     * @param text
     * @param title
     * @param opt
     * @returns PopupService
     */
    PopupService.prototype.error = function (text, title, opt) {
        this.init();
        this.type = 'error';
        this.showConfirmButton = true;
        this.showCancelButton = false;
        this.confirmButtonType = 'danger';
        this.title = '错误';
        var options = this.getArgs(arguments);
        this.setOptions(options);
        this.show();
        return this;
    };
    /**
     * 添加确认处理
     * @param handler 处理函数
       */
    PopupService.prototype.onConfirm = function (handler) {
        this.confirmHandlers.push(handler);
        return this;
    };
    /**
     * 添加取消处理
     * @param handler 处理函数
       */
    PopupService.prototype.onCancel = function (handler) {
        this.cancelHandlers.push(handler);
        return this;
    };
    /**
     * 添加关闭处理
     * @param handler 处理函数
       */
    PopupService.prototype.onClose = function (handler) {
        this.closeHandlers.push(handler);
        return this;
    };
    /**
     * 清楚所有元素上绑定的事件
     */
    PopupService.prototype.clearEvents = function () {
        try {
            for (var i = 0, len = this.eventList.length; i < len; i++) {
                this.eventList[i].target.removeEventListener(this.eventList[i].event, this.eventList[i].handler);
            }
            this.eventList = [];
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * 给元素添加事件
     * @param target 元素
     * @param event 事件名
     * @param handler 处理函数
     */
    PopupService.prototype.addEvent = function (target, event, handler) {
        target.addEventListener(event, handler);
        this.eventList.push({ target: target, handler: handler, event: event });
    };
    return PopupService;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/services/toaster/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
var Toaster = /** @class */ (function () {
    function Toaster() {
        this.toasters = [];
    }
    /**
     * 弹出
     * @param options
       */
    Toaster.prototype.pop = function (options) {
        var _this = this;
        var delay = options.delay || 5000; //延迟关闭的时间
        var animated = options.animated !== undefined ? options.animated : true; //是否加入动画
        if (this.container === null || this.container === undefined) {
            var container = document.getElementById('toast-container');
            if (container === null) {
                container = document.createElement('div');
                container.id = 'toast-container';
                container.className = 'toast-top-center';
                document.body.appendChild(container);
            }
            this.container = container;
        }
        var toast = document.createElement('DIV');
        var toastClass = ['toast', 'ng-leave', 'ng-leave-active'];
        var type = 'info';
        if (options.type) {
            var types = ['success', 'error', 'info', 'wait', 'warning'];
            if (types.indexOf(options.type) >= 0) {
                type = options.type;
            }
        }
        toastClass.push('toast-' + type);
        if (animated) {
            toastClass.push('ng-animate');
        }
        toast.className = toastClass.join(' ');
        var closeBtn = document.createElement('BUTTON');
        closeBtn.className = 'toast-close-button';
        closeBtn.innerHTML = '×';
        var message = document.createElement('div');
        message.innerHTML = "<div>" + options.message + "</div>";
        toast.appendChild(closeBtn);
        if (options.title) {
            var title = document.createElement('DIV');
            title.className = 'toast-title';
            title.innerHTML = options.title;
            toast.appendChild(title);
        }
        toast.appendChild(message);
        this.container.insertBefore(toast, this.container.firstChild);
        setTimeout(function () {
            var classList = toast.className.split(/\s+/);
            var clsIndex = classList.indexOf('ng-leave-active');
            if (clsIndex >= 0) {
                classList.splice(clsIndex, 1);
                toast.className = classList.join(' ');
            }
        });
        var timer = this.delayCloseTimer(toast, delay);
        closeBtn.addEventListener('click', function () {
            _this.container.removeChild(toast);
            toast = null;
        });
        toast.addEventListener('mouseover', function () {
            clearTimeout(timer);
            timer = null;
        });
        toast.addEventListener('mouseleave', function () {
            timer = _this.delayCloseTimer(toast, delay);
        });
    };
    Toaster.prototype.delayCloseTimer = function (toast, delay) {
        var _this = this;
        return setTimeout(function () {
            var classList = toast.className.split(/\s+/);
            var clsIndex = classList.indexOf('ng-leave-active');
            if (clsIndex < 0) {
                classList.push('ng-leave-active');
                toast.className = classList.join(' ');
            }
            setTimeout(function () {
                _this.container.removeChild(toast);
                toast = null;
            }, 1500);
        }, delay);
    };
    /**
     * 建立参数
     * @param arguments
     * @param type
     * @returns ToasterOptions
     */
    Toaster.prototype.createOptions = function (type, args) {
        var opt = {
            type: 'info',
            message: ''
        };
        if (['info', 'success', 'wait', 'warning', 'error'].indexOf(type) >= 0) {
            opt.type = type;
        }
        if (args) {
            if (args.length > 1) {
                opt.title = args[0];
                opt.message = args[1];
            }
            else if (args.length == 1) {
                opt.message = args[0];
            }
        }
        return opt;
    };
    Toaster.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pop(this.createOptions('info', args));
    };
    Toaster.prototype.success = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pop(this.createOptions('success', args));
    };
    Toaster.prototype.wait = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pop(this.createOptions('wait', args));
    };
    Toaster.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pop(this.createOptions('warning', args));
    };
    Toaster.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pop(this.createOptions('error', args));
    };
    return Toaster;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/services/tracert/tracert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TracertService = /** @class */ (function () {
    function TracertService(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
    }
    /**
     * 监听路由变化
     * @param searchParams 搜索参数（只有初始化的参数能被监听到）
     * @param action 监听的回调
     */
    TracertService.prototype.subscribe = function (searchParams, action) {
        var _this = this;
        this.searchParams = searchParams;
        this.actRoute.params.subscribe(function (params) {
            var url_params = params;
            for (var key in _this.searchParams) {
                if (typeof _this.searchParams[key] === 'string' && url_params[key]) {
                    _this.searchParams[key] = url_params[key] + '';
                }
                else if (typeof _this.searchParams[key] === 'number' && url_params[key] !== undefined) {
                    _this.searchParams[key] = parseFloat(url_params[key]);
                }
            }
            if (typeof action === 'function') {
                action();
            }
        });
    };
    /**
     * 导航
     * 将搜索参数写进url参数并跳转，使浏览器生成历史访问记录
     */
    TracertService.prototype.navigate = function () {
        var path = this.router.url.split(';')[0];
        var searchParams = {};
        for (var key in this.searchParams) {
            if (typeof this.searchParams[key] === 'string' && this.searchParams[key]) {
                searchParams[key] = this.searchParams[key];
            }
            else if (typeof this.searchParams[key] === 'number' && (this.searchParams[key] || this.searchParams[key] === 0)) {
                searchParams[key] = this.searchParams[key];
            }
        }
        this.router.navigate([path, searchParams]);
    };
    TracertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
        /**
         * 可跟踪的路由
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TracertService);
    return TracertService;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/slide-down/slide-down.component.html":
/***/ (function(module, exports) {

module.exports = "<div  #wrap class=\"drop-content\"  [style.transition]=\"isTransition?'height '+animateTime+'s':null\"\n [ngClass]=\"{'open':cssOpen}\">\n    <div *ngIf=\"visible\" #content>\n      <ng-content ></ng-content>\n    </div>\n\t</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/slide-down/slide-down.component.less":
/***/ (function(module, exports) {

module.exports = ".drop-content {\n  width: 100%;\n}\n.drop-content.open {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/slide-down/slide-down.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
 * 展开/收起
 * @author Qingyu Wei
 */

var SlideDownComponent = /** @class */ (function () {
    function SlideDownComponent() {
        this.isTransition = false;
        //设置动画时间
        this.animateTime = 0.3;
    }
    Object.defineProperty(SlideDownComponent.prototype, "show", {
        set: function (value) {
            var _this = this;
            //传入的值为true，内容显示
            //先获取实际内容的高度
            var height;
            if (value) {
                this.wrap.nativeElement.style.overflow = 'hidden';
                this.cssOpen = true;
                this.visible = value;
                setTimeout(function () {
                    height = _this.content.nativeElement.offsetHeight;
                    _this.wrap.nativeElement.style.height = 0;
                    _this.isTransition = true;
                    setTimeout(function () {
                        _this.cssOpen = false;
                        setTimeout(function () {
                            _this.wrap.nativeElement.style.height = height + "px";
                            setTimeout(function () {
                                _this.wrap.nativeElement.style.overflow = null;
                            }, _this.animateTime * 1000);
                        });
                    });
                });
            }
            else {
                this.wrap.nativeElement.style.height = 0;
                this.wrap.nativeElement.style.overflow = 'hidden';
                setTimeout(function () {
                    _this.wrap.nativeElement.style.overflow = null;
                    _this.wrap.nativeElement.style.height = null;
                    _this.isTransition = false;
                    _this.visible = value;
                }, this.animateTime * 1000);
            }
        },
        enumerable: true,
        configurable: true
    });
    SlideDownComponent.prototype.ngOnInit = function () {
    };
    SlideDownComponent.prototype.open = function () {
        if (!this.visible) {
            this.show = true;
        }
    };
    SlideDownComponent.prototype.close = function () {
        if (this.visible) {
            this.show = false;
        }
    };
    SlideDownComponent.prototype.toggle = function () {
        this.show = !this.visible;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideDownComponent.prototype, "animateTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('wrap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SlideDownComponent.prototype, "wrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SlideDownComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlideDownComponent.prototype, "show", null);
    SlideDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slide-down',
            template: __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideDownComponent);
    return SlideDownComponent;
}());

//获取的高度


/***/ }),

/***/ "./src/packages/dolphinng/src/slide-down/slide-down.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_down_component__ = __webpack_require__("./src/packages/dolphinng/src/slide-down/slide-down.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideDownModule = /** @class */ (function () {
    function SlideDownModule() {
    }
    SlideDownModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide_down_component__["a" /* SlideDownComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__slide_down_component__["a" /* SlideDownComponent */]
            ]
        })
    ], SlideDownModule);
    return SlideDownModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\" #slider (click)=\"setNewValueByMousePosition($event)\">\n  <div class=\"slider-text-bar\">\n    <span class=\"slider-min\" *ngIf=\"(value-min)/(max-min)>0.1\">{{min}}</span>\n    <span class=\"slider-max\" *ngIf=\"(max-value)/(max-min)>0.1\">{{max}}</span>\n  </div>\n  <div class=\"slider-body\" >\n    <div class=\"slider-value\" [style.left]=\"left\">{{value}}</div>\n    <div class=\"slider-bg\" [style.width]=\"left\" *ngIf=\"isValueBackground\"></div>\n    <div class=\"slider-thumb\"   #sliderThumb\n         [style.left]=\"left\"\n         [ngClass]=\"{'active':isPressing}\" (mousedown)=\"thumbPress()\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/slider/slider.component.less":
/***/ (function(module, exports) {

module.exports = ".slider {\n  width: 100%;\n}\n.slider,\n.slider * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.slider-text-bar {\n  display: block;\n  width: 100%;\n  height: 16px;\n  font-size: 12px;\n  color: #999;\n  margin-bottom: 5px;\n}\n.slider-text-bar .slider-min {\n  float: left;\n}\n.slider-text-bar .slider-max {\n  float: right;\n}\n.slider-body {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 8px;\n  background-color: #e4eaec;\n  border-radius: 4px;\n}\n.slider-body .slider-value {\n  display: inline-block;\n  min-width: 20px;\n  position: absolute;\n  left: 0;\n  top: -22px;\n  /* line-height: 20px; */\n  font-size: 12px;\n  color: #999;\n  text-align: center;\n  vertical-align: middle;\n}\n.slider-body .slider-thumb {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -6px;\n  left: 50%;\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  background-color: #fff;\n}\n.slider-body .slider-thumb:after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  border-radius: 50%;\n  background-color: #ddd;\n}\n.slider-body .slider-thumb.active:after {\n  background-color: #09A8F1;\n}\n.slider-body .slider-bg {\n  display: block;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background-color: #09A8F1 ;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent(eleRef) {
        this.eleRef = eleRef;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.min = 0;
        this.max = 100;
        this.decimal = 0;
        this.isValueBackground = true;
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isPressing = false; //是否按下鼠标左键
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('mouseup', function (ev) {
            _this.isPressing = false;
            _this.complete.emit(_this.value);
            window.removeEventListener('mousemove', _this.mouseMoveHandler); //取消监听
        });
    };
    SliderComponent.prototype.ngOnChanges = function (changes) {
        var valChg = changes['value'];
        if (valChg.currentValue != valChg.previousValue) {
            if (valChg.currentValue !== undefined) {
                if (!this.isPressing) {
                    this.setLeftByValue(valChg.currentValue);
                }
            }
        }
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('mousemove', this.mouseMoveHandler); //取消监听
    };
    SliderComponent.prototype.thumbPress = function () {
        var _this = this;
        this.isPressing = true;
        this.mouseMoveHandler = function (ev) {
            _this.setNewValueByMousePosition(ev);
        };
        window.addEventListener('mousemove', this.mouseMoveHandler);
    };
    SliderComponent.prototype.setNewValueByMousePosition = function (ev) {
        var e = ev;
        var m_x = e.pageX || (e.clientX +
            (document.documentElement.scrollLeft
                || document.body.scrollLeft));
        var target_x = this.slider.nativeElement.getBoundingClientRect().left + (document.documentElement.scrollLeft
            || document.body.scrollLeft);
        var sliderW = this.slider.nativeElement.offsetWidth;
        var thumbW = this.sliderThumb.nativeElement.offsetWidth;
        var minL = -thumbW / 2;
        var maxL = sliderW - thumbW / 2;
        var left = m_x - target_x - thumbW / 2;
        var percent = 0;
        if (left < minL) {
            percent = minL / sliderW * 100;
        }
        else if (left > maxL) {
            percent = maxL / sliderW * 100;
        }
        else {
            percent = left / sliderW * 100;
        }
        this.left = percent + '%';
        var newVal = this.parseDecimal((this.max - this.min) * (percent / 100 + thumbW / 2 / sliderW) + this.min);
        this.valueChange.emit(newVal);
    };
    SliderComponent.prototype.setLeftByValue = function (val) {
        var percent = 100 * ((val - this.min) / (this.max - this.min));
        if (percent < 0) {
            percent = 0;
        }
        else if (percent > 100) {
            percent = 100;
        }
        percent -= (100 * this.sliderThumb.nativeElement.offsetWidth / 2 / this.slider.nativeElement.offsetWidth);
        this.left = percent + '%';
    };
    SliderComponent.prototype.parseDecimal = function (val) {
        if (this.decimal) {
            return parseFloat(val.toFixed(this.decimal));
        }
        else {
            return Math.round(val);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SliderComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "decimal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "isValueBackground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SliderComponent.prototype, "complete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SliderComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('sliderThumb'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SliderComponent.prototype, "sliderThumb", void 0);
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slider',
            template: __webpack_require__("./src/packages/dolphinng/src/slider/slider.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/slider/slider.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/slider/slider.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_component__ = __webpack_require__("./src/packages/dolphinng/src/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderModule = /** @class */ (function () {
    function SliderModule() {
    }
    SliderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slider_component__["a" /* SliderComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__slider_component__["a" /* SliderComponent */]
            ]
        })
    ], SliderModule);
    return SliderModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/spinner/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_component__ = __webpack_require__("./src/packages/dolphinng/src/spinner/spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SpinnerComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_component__["a" /* SpinnerComponent */]
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"\n     [ngClass]=\"{'spinner-xs':size==='xs','spinner-sm':size==='sm','spinner-lg':size==='lg',\n     'spinner-dark':isDark,\n     'spinner-three':type==='three','spinner-sixty':type==='sixty'}\">\n</div>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/spinner/spinner.component.less":
/***/ (function(module, exports) {

module.exports = ".spinner {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  background-image: url(data:image/gif;base64,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);\n  background-size: 100%;\n  vertical-align: middle;\n}\n.spinner.spinner-sixty {\n  background-image: url('sixty-lg.34ec62a9f64f4b12622d.gif');\n}\n.spinner.spinner-dark {\n  background-image: url(data:image/gif;base64,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);\n}\n.spinner.spinner-sixty.spinner-dark {\n  background-image: url('sixty-dark-lg.3b7751de28e93edd0cf7.gif');\n}\n.spinner.spinner-xs {\n  width: 16px;\n  height: 16px;\n}\n.spinner.spinner-sm {\n  width: 24px;\n  height: 24px;\n}\n.spinner.spinner-lg {\n  width: 48px;\n  height: 48px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(elemRef) {
        this.elemRef = elemRef;
        this.isDark = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SpinnerComponent.prototype, "isDark", void 0);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',
            template: __webpack_require__("./src/packages/dolphinng/src/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/spinner/spinner.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/switch/switch.component.html":
/***/ (function(module, exports) {

module.exports = "<label  class=\"i-switch{{styleClass?' '+styleClass:''}}\"\n    (click)=\"toggleCheck($event)\"\n    [ngClass]=\"{'bg-info':type==='info'||!type,\n    'bg-primary':type==='primary',\n    'bg-success':type==='success',\n    'bg-danger':type==='danger',\n    'bg-warning':type==='warning',\n    'i-switch-sm':size==='sm',\n    'i-switch-lg':size==='lg'}\">\n    <i [ngClass]=\"{'checked':value}\"></i>\n    <span>\n          <ng-content></ng-content>\n    </span>\n</label>\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/switch/switch.component.less":
/***/ (function(module, exports) {

module.exports = ".i-switch {\n  vertical-align: middle;\n}\n.i-switch input {\n  cursor: pointer;\n}\n.i-switch i:after {\n  left: 0;\n}\n.i-switch i.checked:after {\n  margin-left: 16px;\n}\n.i-switch i.checked:before {\n  background-color: transparent;\n}\n.i-switch.i-switch-lg i.checked:after {\n  margin-left: 22px;\n}\n"

/***/ }),

/***/ "./src/packages/dolphinng/src/switch/switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.auto = true;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SwitchComponent.prototype.ngOnInit = function () {
    };
    SwitchComponent.prototype.toggleCheck = function (ev) {
        if (!this.disabled) {
            if (!this.auto) {
                this.action.emit(this.value);
            }
            else {
                var target = ev.target || ev.srcElement;
                if (target.nodeName !== 'INPUT') {
                    this.value = !this.value;
                    this.valueChange.emit(this.value);
                }
            }
        }
    };
    SwitchComponent.prototype.toggle = function (ev) {
        ev.stopPropagation();
        if (!this.disabled) {
            var target = ev.target || ev.srcElement;
            this.value = !this.value;
            this.valueChange.emit(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SwitchComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SwitchComponent.prototype, "auto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SwitchComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "name", void 0);
    SwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch',
            template: __webpack_require__("./src/packages/dolphinng/src/switch/switch.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/switch/switch.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/switch/switch.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__switch_component__ = __webpack_require__("./src/packages/dolphinng/src/switch/switch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SwitchModule = /** @class */ (function () {
    function SwitchModule() {
    }
    SwitchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__switch_component__["a" /* SwitchComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__switch_component__["a" /* SwitchComponent */]
            ]
        })
    ], SwitchModule);
    return SwitchModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/text-max-length/text-max-length.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextMaxLengthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextMaxLengthDirective = /** @class */ (function () {
    function TextMaxLengthDirective(elemRef) {
        this.elemRef = elemRef;
        this.textMaxLength = '';
    }
    TextMaxLengthDirective.prototype.ngOnInit = function () {
        this.elemRef.nativeElement.style.maxWidth = this.textMaxLength;
        this.elemRef.nativeElement.style.whiteSpace = 'nowrap';
        this.elemRef.nativeElement.style.overflow = 'hidden';
        this.elemRef.nativeElement.style.textOverflow = 'ellipsis';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TextMaxLengthDirective.prototype, "textMaxLength", void 0);
    TextMaxLengthDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[textMaxLength]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], TextMaxLengthDirective);
    return TextMaxLengthDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/text-max-length/text-max-length.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextMaxLengthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_max_length_directive__ = __webpack_require__("./src/packages/dolphinng/src/text-max-length/text-max-length.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextMaxLengthModule = /** @class */ (function () {
    function TextMaxLengthModule() {
    }
    TextMaxLengthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__text_max_length_directive__["a" /* TextMaxLengthDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__text_max_length_directive__["a" /* TextMaxLengthDirective */]
            ]
        })
    ], TextMaxLengthModule);
    return TextMaxLengthModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/toggle-class/toggle-class.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleClassDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleClassDirective = /** @class */ (function () {
    function ToggleClassDirective(elemRef) {
        this.elemRef = elemRef;
        this.keep = false;
        this.triggerEvent = 'click';
        this.tempWindowEvent = {
            event: this.triggerEvent,
            handler: null
        };
    }
    ToggleClassDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.orgClassName = this.elemRef.nativeElement.className;
        this.toggleClassList = this.getToggleClassList(this.toggleClass);
        if (this.target) {
            this.targetElem = document.getElementById(this.target);
            this.targetElem && (this.orgTargetClassName = this.targetElem.className);
            var targetToggleClass = this.targetClass || this.toggleClass;
            this.targetToggleClassList = this.getToggleClassList(targetToggleClass);
        }
        this.elemRef.nativeElement.addEventListener(this.triggerEvent, function (ev) {
            ev.stopPropagation();
            setTimeout(function () {
                if (_this.keep) {
                    var classList = _this.uniqueArray((_this.orgClassName + ' ' + _this.toggleClass).split(/\s+/));
                    _this.elemRef.nativeElement.className = classList.join(' ');
                    if (_this.target) {
                        var targetClassList = _this.uniqueArray((_this.orgTargetClassName + ' ' + _this.targetClass).split(/\s+/));
                        _this.targetElem.className = targetClassList.join(' ');
                    }
                }
                else {
                    _this.changeElemClass(_this.elemRef.nativeElement, _this.toggleClassList);
                    if (_this.target) {
                        _this.targetElem && _this.changeElemClass(_this.targetElem, _this.targetToggleClassList);
                    }
                }
                if (!(_this.revokable === undefined || _this.revokable === 'false')) {
                    var finalClassList = _this.getClassList(_this.elemRef.nativeElement);
                    var commonClassList = _this.getCommonClass(finalClassList, _this.toggleClassList);
                    if (commonClassList.length) {
                        _this.addOutClickResetListener();
                    }
                }
            });
        });
    };
    /**
     * 切换元素类名
     * @param elem
     * @param toggleClass
       */
    ToggleClassDirective.prototype.changeElemClass = function (elem, toggleClass) {
        var curClassList = this.getClassList(elem); //当前class列表
        var curOnlyClass = this.getOnlyClass(curClassList, toggleClass); //仅当前元素有的class列表
        var toggleOnlyClass = this.getOnlyClass(toggleClass, curClassList); //仅输入参数有的class列表
        var newClassList = curOnlyClass.concat(toggleOnlyClass);
        elem.className = newClassList.join(' ');
    };
    ToggleClassDirective.prototype.ngOnDestroy = function () {
        this.removeOutClickResetListener();
        this.targetElem = null;
    };
    /**
     * 添加点击外边重置class的事件
     */
    ToggleClassDirective.prototype.addOutClickResetListener = function () {
        var _this = this;
        var handler = function (ev) {
            _this.elemRef.nativeElement.className = _this.orgClassName;
            if (_this.target) {
                _this.targetElem.className = _this.orgTargetClassName;
            }
            _this.removeOutClickResetListener();
        };
        window.addEventListener(this.triggerEvent, handler);
        this.tempWindowEvent.event = this.triggerEvent;
        this.tempWindowEvent.handler = handler;
    };
    /**
     * 移除window上的浏览器事件
     */
    ToggleClassDirective.prototype.removeOutClickResetListener = function () {
        if (this.tempWindowEvent !== undefined) {
            window.removeEventListener(this.tempWindowEvent.event, this.tempWindowEvent.handler);
        }
    };
    /**
     * 获取元素类名列表
     * @param elem
     * @returns Array<string>
       */
    ToggleClassDirective.prototype.getClassList = function (elem) {
        return this.uniqueArray(elem.className.split(/\s+/));
    };
    /**
     * 获取需要切换的类名列表
     * @returns any
       */
    ToggleClassDirective.prototype.getToggleClassList = function (inputClass) {
        var nullRegExp = /^\s+$/;
        if (!nullRegExp.test(inputClass)) {
            return this.uniqueArray(inputClass.split(/\s+/));
        }
        return [];
    };
    /**
     * 找出仅在数组A中存在，B中不存在的类
     * @param arrA
     * @param arrB
     * @returns Array
       */
    ToggleClassDirective.prototype.getOnlyClass = function (arrA, arrB) {
        var result = [];
        for (var _i = 0, arrA_1 = arrA; _i < arrA_1.length; _i++) {
            var item = arrA_1[_i];
            if (arrB.indexOf(item) < 0) {
                result.push(item);
            }
        }
        return result;
    };
    /**
     * 获取两个数组共有的类名
     * @param arrA
     * @param arrB
     * @returns Array
       */
    ToggleClassDirective.prototype.getCommonClass = function (arrA, arrB) {
        var result = [];
        for (var _i = 0, arrB_1 = arrB; _i < arrB_1.length; _i++) {
            var item = arrB_1[_i];
            if (arrA.indexOf(item) >= 0) {
                result.push(item);
            }
        }
        return result;
    };
    /**
     * 去重
     * @param array
     * @returns Array
       */
    ToggleClassDirective.prototype.uniqueArray = function (array) {
        var newArr = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (newArr.indexOf(item) < 0) {
                newArr.push(item);
            }
        }
        return newArr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleClassDirective.prototype, "toggleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('opt-revokable'),
        __metadata("design:type", String)
    ], ToggleClassDirective.prototype, "revokable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('opt-target'),
        __metadata("design:type", String)
    ], ToggleClassDirective.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('opt-targetClass'),
        __metadata("design:type", String)
    ], ToggleClassDirective.prototype, "targetClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('opt-keep'),
        __metadata("design:type", Boolean)
    ], ToggleClassDirective.prototype, "keep", void 0);
    ToggleClassDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[toggleClass]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ToggleClassDirective);
    return ToggleClassDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/toggle-class/toggle-class.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleClassModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_class_directive__ = __webpack_require__("./src/packages/dolphinng/src/toggle-class/toggle-class.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToggleClassModule = /** @class */ (function () {
    function ToggleClassModule() {
    }
    ToggleClassModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__toggle_class_directive__["a" /* ToggleClassDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__toggle_class_directive__["a" /* ToggleClassDirective */]
            ]
        })
    ], ToggleClassModule);
    return ToggleClassModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/toggle/toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__switch_switch_component__ = __webpack_require__("./src/packages/dolphinng/src/switch/switch.component.ts");
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


var ToggleComponent = /** @class */ (function (_super) {
    __extends(ToggleComponent, _super);
    function ToggleComponent() {
        return _super.call(this) || this;
    }
    ToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toggle',
            template: __webpack_require__("./src/packages/dolphinng/src/switch/switch.component.html"),
            styles: [__webpack_require__("./src/packages/dolphinng/src/switch/switch.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__switch_switch_component__["a" /* SwitchComponent */]));



/***/ }),

/***/ "./src/packages/dolphinng/src/toggle/toggle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_component__ = __webpack_require__("./src/packages/dolphinng/src/toggle/toggle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__toggle_component__["a" /* ToggleComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__toggle_component__["a" /* ToggleComponent */]
            ]
        })
    ], ToggleModule);
    return ToggleModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/uploader/UploadFile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFile; });
var UploadFile = /** @class */ (function () {
    function UploadFile() {
        this.compressed = false;
        this.progress = 0;
        this.uploaded = false;
        this.success = false;
        this.error = false;
        this.response = null;
        this.submitData = [];
        this.customData = {}; //默认空对象
    }
    UploadFile.prototype.setSuccess = function () {
        this.success = true;
        this.error = false;
    };
    UploadFile.prototype.setError = function () {
        this.success = false;
        this.error = true;
    };
    /**
     * 获取(要提交)的文件
     * @param type 0:Filed/Blob对象 1:Base64数据
     */
    UploadFile.prototype.getFile = function (type) {
        var result;
        if (type === 1) {
            if (this.compressed) {
                result = this.compressedDataUrl;
            }
            else {
                result = this.dataUrl;
            }
        }
        else {
            if (this.compressed) {
                result = this.createBlob(this.compressedDataUrl);
            }
            else {
                result = this.file;
            }
        }
        return result;
    };
    UploadFile.prototype.addSubmitData = function (name, value) {
        if (!(this.submitData instanceof Array)) {
            this.submitData = [];
        }
        this.submitData.push({
            name: name,
            value: value
        });
    };
    /**
     * 创建Blob存储文件数据
     * @param dataUrl
     */
    UploadFile.prototype.createBlob = function (dataUrl) {
        var arr = dataUrl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1].replace(/\s/g, ''));
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime }); //值，类型
    };
    return UploadFile;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/uploader/Uploader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uploader; });
var Uploader = /** @class */ (function () {
    function Uploader() {
        this.isUploading = false; //是否在上传
        this.url = '';
        this.name = '';
        this.headers = {};
        this.method = 'post';
        this.uploadType = 0;
        this.queue = [];
        this.isPreview = true;
        this.isCompress = false;
        this.handlers = {
            select: [],
            queue: [],
            queueAll: [],
            //    remove: [],
            upload: [],
            progress: [],
            success: [],
            overSize: [],
            overLength: [],
            error: [],
            complete: []
        };
        this.customData = {}; //默认空对象
    }
    /**
     * 触发
     */
    Uploader.prototype.trigger = function (handler, params) {
        var handlers = this.handlers[handler];
        if (handlers) {
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var fn = handlers_1[_i];
                if (params) {
                    fn.apply(this, params);
                }
                else {
                    fn.apply(this);
                }
            }
        }
    };
    /**
     * 上传
     */
    Uploader.prototype.upload = function () {
        var _this = this;
        var createData = function (index) {
            if (_this.uploadType === 0) {
                var uploadFile = _this.queue[index];
                var fd = new FormData();
                if (uploadFile.submitData && uploadFile.submitData instanceof Array) {
                    for (var _i = 0, _a = uploadFile.submitData; _i < _a.length; _i++) {
                        var o = _a[_i];
                        fd.append(o.name, o.value);
                    }
                }
                else {
                    fd.append(uploadFile.name || _this.name, uploadFile.getFile(0));
                }
                return fd;
            }
            else if (_this.uploadType === 1) {
            }
        };
        var submit = function (index, data) {
            var next = function () {
                index++;
                if (index < _this.queue.length) {
                    submit(index, createData(index));
                }
                else {
                    _this.isUploading = false;
                    _this.trigger('complete', [_this]);
                }
            };
            var uploadFile = _this.queue[index];
            if (uploadFile.uploaded) {
                next();
                return;
            }
            var xhr = new XMLHttpRequest();
            uploadFile.xhr = xhr;
            xhr.open(_this.method.toLowerCase(), _this.url);
            for (var o in _this.headers) {
                xhr.setRequestHeader(o + '', _this.headers[o + '']);
            }
            //侦查当前附件上传情况
            xhr.upload.onprogress = function (evt) {
                var loaded = evt.loaded;
                var total = evt.total;
                var percent = Math.floor(100 * loaded / total); //已经上传的百分比
                uploadFile.progress = percent;
                _this.trigger('progress', [percent, uploadFile, _this, index]); //触发
            };
            xhr.onload = function () {
                uploadFile.uploaded = true;
                uploadFile.response = xhr.responseText;
                if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)) {
                    uploadFile.setError();
                    _this.trigger('error', [uploadFile, _this, index]); //触发
                }
                else {
                    _this.trigger('success', [uploadFile, _this, index]); //触发
                }
                next();
            };
            xhr.onerror = function (evt) {
                uploadFile.setError();
            };
            xhr.send(data);
        };
        this.trigger('upload', [this]); //触发
        this.isUploading = true;
        submit(0, createData(0));
    };
    Uploader.prototype.compress = function (src, scale, quality) {
        return new Promise(function (resolve, reject) {
            if (quality < 0 || quality > 1) {
                quality = 1;
            }
            var localImg = new Image();
            localImg.src = src;
            localImg.onload = function (e) {
                var that = localImg;
                // 默认按比例压缩
                var comScale = parseFloat(scale + '');
                var w = that.width * comScale, h = that.height * comScale;
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w + '';
                var anh = document.createAttribute("height");
                anh.nodeValue = h + '';
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(that, 0, 0, w, h);
                // 图像质量
                // quality值越小，所绘制出的图像越模糊
                var base64 = canvas.toDataURL('image/jpeg', parseFloat(quality + ''));
                // 回调函数返回base64的值
                resolve(base64);
            };
            localImg.onerror = function () {
                reject(src);
            };
        });
    };
    /**
     * base64转换
     * @param file
     */
    Uploader.prototype.createBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // 读取File对象的数据
            reader.readAsDataURL(file);
            // 绑定load事件
            reader.onload = function (e) {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(file);
            };
        });
    };
    /**
     * 获取base64数据的文件长度
     * @param base64Str
     * @returns number
     */
    Uploader.prototype.getBase64FileSize = function (base64Str) {
        var splitStr = base64Str.split(',');
        var str = splitStr[splitStr.length - 1].replace(/=/g, '');
        var strLength = str.length;
        return Math.round(strLength - (strLength / 8) * 2);
    };
    /**
     * 获取base64数据的data
     * @param base64Str
     * @returns number
     */
    Uploader.prototype.getBase64FileData = function (base64Str) {
        var splitStr = base64Str.split(',');
        return splitStr[splitStr.length - 1];
    };
    /*----------------------------------------生命周期------------------------------------------*/
    /**
     * 选中
     * @param fn
     */
    Uploader.prototype.onSelect = function (fn) {
        this.handlers.select.push(fn);
        return this;
    };
    /**
     * 超过大小
     * @param fn
     * @returns Uploader
     */
    Uploader.prototype.onOverSize = function (fn) {
        this.handlers.overSize.push(fn);
        return this;
    };
    /**
     * 超过数量
     * @param fn
     * @returns Uploader
     */
    Uploader.prototype.onOverLength = function (fn) {
        this.handlers.overLength.push(fn);
        return this;
    };
    /**
     * 单个文件入列
     * @param fn
     */
    Uploader.prototype.onQueue = function (fn) {
        this.handlers.queue.push(fn);
        return this;
    };
    /**
     * 全部文件入列
     * @param fn
     */
    Uploader.prototype.onQueueAll = function (fn) {
        this.handlers.queueAll.push(fn);
        return this;
    };
    /**
     * 上传
     * @param fn
     */
    Uploader.prototype.onUpload = function (fn) {
        this.handlers.upload.push(fn);
        return this;
    };
    /**
     * 上传中
     * @param fn
     */
    Uploader.prototype.onProgress = function (fn) {
        this.handlers.progress.push(fn);
        return this;
    };
    /**
     * 上传成功
     * @param fn
     */
    Uploader.prototype.onSuccess = function (fn) {
        this.handlers.success.push(fn);
        return this;
    };
    Uploader.prototype.onComplete = function (fn) {
        this.handlers.complete.push(fn);
        return this;
    };
    /**
     * 上传失败
     * @param fn
     */
    Uploader.prototype.onError = function (fn) {
        this.handlers.error.push(fn);
        return this;
    };
    return Uploader;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/uploader/uploader.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Uploader__ = __webpack_require__("./src/packages/dolphinng/src/uploader/Uploader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UploadFile__ = __webpack_require__("./src/packages/dolphinng/src/uploader/UploadFile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploaderDirective = /** @class */ (function () {
    function UploaderDirective(el) {
        var _this = this;
        this.el = el;
        this.el.nativeElement.addEventListener('change', function (event) {
            var ev = event || window.event;
            var target = ev.target || ev.srcElement;
            var files = target.files;
            _this.uploader.trigger('select', [files]);
            _this.queueFiles(files);
        });
    }
    UploaderDirective.prototype.queue = function (uploadFile) {
        this.uploader.queue.push(uploadFile);
        this.uploader.trigger('queue', [uploadFile]);
    };
    UploaderDirective.prototype.triggerQueueAll = function () {
        this.uploader.trigger('queueAll', [this.uploader.queue]);
    };
    UploaderDirective.prototype.queueFiles = function (files) {
        var _this = this;
        if (files.length > this.uploader.maxLength) {
            this.uploader.trigger('overLength', [files.length, this.uploader.maxLength]);
            return;
        }
        var fn = function (index) {
            var file = files[index];
            var uploadFile = new __WEBPACK_IMPORTED_MODULE_2__UploadFile__["a" /* UploadFile */]();
            uploadFile.fileName = file.name;
            uploadFile.fileType = file.type;
            uploadFile.fileSize = file.size;
            uploadFile.file = file;
            var fileNameSplit = file.name.split('.');
            uploadFile.fileExtension = ('.' + fileNameSplit[fileNameSplit.length - 1]).toLowerCase();
            var check = function () {
                index++;
                if (index < files.length) {
                    fn(index);
                }
                else {
                    _this.triggerQueueAll();
                }
            };
            //检测合法性
            if (_this.uploader.maxSize && uploadFile.fileSize > _this.uploader.maxSize) {
                _this.uploader.trigger('overSize', [uploadFile.fileSize, _this.uploader.maxSize, uploadFile]);
                check();
                return;
            }
            else if (_this.uploader.maxLength && _this.uploader.queue.length >= _this.uploader.maxLength) {
                _this.uploader.trigger('overLength', [files.length, _this.uploader.maxLength]);
                _this.triggerQueueAll();
                return;
            }
            if (_this.uploader.isCompress) {
                if (uploadFile.fileType.indexOf('image/') >= 0) {
                    _this.uploader.createBase64(file)
                        .then(function (data) {
                        uploadFile.dataUrl = data;
                        var scale = _this.compressScale || 1, quality = _this.compressQuality || 0.7;
                        return _this.uploader.compress(data, scale, quality);
                    })
                        .then(function (dataUrl) {
                        uploadFile.compressed = true;
                        uploadFile.fileSize = _this.uploader.getBase64FileSize(dataUrl);
                        uploadFile.compressedDataUrl = dataUrl;
                        //queue
                        _this.queue(uploadFile);
                        check();
                    });
                }
                else {
                    /*this.uploader.createBase64(file)
                      .then((data)=> {
                        uploadFile.dataUrl = data;
                        this.queue(uploadFile);
                        check();
                      });*/
                    //queue
                    _this.queue(uploadFile);
                    check();
                }
            }
            else {
                if (_this.uploader.uploadType === 1 || _this.uploader.isPreview) {
                    _this.uploader.createBase64(file)
                        .then(function (data) {
                        uploadFile.fileSize = _this.uploader.getBase64FileSize(data);
                        uploadFile.dataUrl = data;
                        //queue
                        _this.queue(uploadFile);
                        check();
                    });
                }
                else {
                    _this.queue(uploadFile);
                    check();
                }
            }
        };
        fn(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Uploader__["a" /* Uploader */])
    ], UploaderDirective.prototype, "uploader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], UploaderDirective.prototype, "compressScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], UploaderDirective.prototype, "compressQuality", void 0);
    UploaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[uploader]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], UploaderDirective);
    return UploaderDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/uploader/uploader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploader_directive__ = __webpack_require__("./src/packages/dolphinng/src/uploader/uploader.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UploaderModule = /** @class */ (function () {
    function UploaderModule() {
    }
    UploaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__uploader_directive__["a" /* UploaderDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__uploader_directive__["a" /* UploaderDirective */],
            ]
        })
    ], UploaderModule);
    return UploaderModule;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/validate/html5-validate.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTML5ValidateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HTML5ValidateDirective = /** @class */ (function () {
    function HTML5ValidateDirective(elemRef) {
        this.elemRef = elemRef;
        this.visible = false;
    }
    HTML5ValidateDirective.prototype.ngOnInit = function () {
        if (this.elemRef.nativeElement.nodeName === 'FORM') {
            this.elemRef.nativeElement.removeAttribute('novalidate');
        }
        else {
            this.initValidateRules();
        }
    };
    HTML5ValidateDirective.prototype.createCustomValidity = function () {
        var msg = '';
        if (this.HTML5Validate instanceof Array) {
            if (typeof this.HTML5Validate[1] === 'string') {
                if (!!this.HTML5Validate[0]) {
                    msg = this.HTML5Validate[1];
                }
            }
            else {
                for (var _i = 0, _a = this.HTML5Validate; _i < _a.length; _i++) {
                    var o = _a[_i];
                    if (typeof o[1] === 'string') {
                        if (!!o[0]) {
                            msg = o[1];
                            break;
                        }
                    }
                }
            }
        }
        return msg;
    };
    HTML5ValidateDirective.prototype.initValidateRules = function () {
        var _this = this;
        this.elemRef.nativeElement.addEventListener('invalid', function () {
            _this.elemRef.nativeElement.setCustomValidity(_this.createCustomValidity());
        });
        this.elemRef.nativeElement.addEventListener('change', function () {
            _this.elemRef.nativeElement.setCustomValidity(_this.createCustomValidity());
        });
        this.elemRef.nativeElement.addEventListener('keydown', function () {
            _this.elemRef.nativeElement.setCustomValidity('');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HTML5ValidateDirective.prototype, "HTML5Validate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HTML5ValidateDirective.prototype, "visible", void 0);
    HTML5ValidateDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[HTML5Validate]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HTML5ValidateDirective);
    return HTML5ValidateDirective;
}());



/***/ }),

/***/ "./src/packages/dolphinng/src/validate/validate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html5_validate_directive__ = __webpack_require__("./src/packages/dolphinng/src/validate/html5-validate.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidateModule = /** @class */ (function () {
    function ValidateModule() {
    }
    ValidateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__html5_validate_directive__["a" /* HTML5ValidateDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__html5_validate_directive__["a" /* HTML5ValidateDirective */]
            ]
        })
    ], ValidateModule);
    return ValidateModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map