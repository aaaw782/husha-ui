webpackJsonp(["themes.module"],{

/***/ "./src/app/themes/themes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">主题/皮肤</h2>\n</div>\n<div class=\"wrapper-md bg-white\" style=\"min-height:720px;\">\n    <p class=\"h4 mar-b-sm\">当前皮肤：{{themesSvc.skin||'默认'}}<span class=\"pad-l-sm h5 text-disabled\">（你可以展开右边悬浮按钮，切换皮肤/主题进行预览）</span></p>\n    <ng-container *ngIf=\"themesSvc.skin\">\n        <div *ngIf=\"themesSvc.skin==='deep-blue'\">\n            <ul>\n                <li>● 当前皮肤主按钮：<button type=\"button\" class=\"btn btn-primary\">btn btn-primary</button></li>\n                <li class=\"mar-b-xs\">● 当前皮肤主要文字颜色：<span class=\"text-primary\">text-primary</span></li>\n                <li>● 使用方法(共4个步骤，其中第1、2、3步为皮肤使用，第4、5步为项目首页顶部替换)：\n                    <ul class=\"pad-l-lg mar-b-sm\">\n                        <li>1.将dolphinng组件包更新到最新版本。（项目根目录下运行npm install dolphinng@latest --save）</li>\n                        <li>2.在项目根目录.angular-cli.json的styles字段字段引入皮肤的样式文件，路径为../node_modules/dolphinng/assests/styles/skins/deep-blue.less</li>\n                        <li>3.根目录下src/index.html文件给body标签加上class=\"deep-blue\"</li>\n                        <li>\n                            <p>4.将app/index/index.component.html文件代码替换为以下内容(特定内容自行替换)</p>\n                            <div>\n                                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/themes/skins/deep-blue.html\">\n                                </code-high-light>\n                            </div>\n                        </li>\n                        <li>\n                            <p>5.将app/index/index.component.css文件代码替换为以下内容</p>\n                            <div>\n                                <code-high-light maxHeight=\"500px\" language=\"less\" codeSrc=\"./assets/sources/themes/skins/deep-blue.less\">\n                                </code-high-light>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n        <div *ngIf=\"themesSvc.skin=='dol'\">\n            当前皮肤下特殊按钮：\n            <button class=\"btn-def\">btn-def</button>\n            <button class=\"btn-def btn-def-sm\">btn-def-sm</button>\n            <button class=\"btn-def btn-def-xs\">btn-def-xs</button>\n        </div>\n        <h4 class=\"text-primary\">如何使用该皮肤？</h4>\n        <div *ngIf=\"themesSvc.skin=='black'\">\n            将headler,header-left,header-right,aside-left的theme属性值设为\"black\"即可。\n        </div>\n        <div *ngIf=\"themesSvc.skin=='dol'\">\n            <ul>\n                <li>1.给body标签添加对应皮肤的类名；</li>\n                <li>2.在项目根目录的.angular--cli.json文件中apps/styles里引用对应皮肤的css/less文件(其他css/less文件之后，全局样式文件style.less之前)。</li>\n            </ul>\n            <div>\n                <h4 class=\"text-primary\">下面是一个完整示例：</h4>\n                <ul>\n                    <li>\n                        <p>1.index.html</p>\n                        <img src=\"./assets/img/demo/theme_dol_index_body.png\" />\n                    </li>\n                    <li>\n                        <p> 2.angular-cli.json</p>\n                        <img src=\"./assets/img/demo/theme_dol_angularcli_apps_styles.png\" />\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/themes/themes.component.less":
/***/ (function(module, exports) {

module.exports = "li {\n  margin-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/themes/themes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_setting_setting_service__ = __webpack_require__("./src/app/core/services/setting/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_themes_themes_service__ = __webpack_require__("./src/app/core/services/themes/themes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(themesSvc, actRoute, setting) {
        this.themesSvc = themesSvc;
        this.actRoute = actRoute;
        this.setting = setting;
        var skin = this.actRoute.snapshot.params['skin'];
        console.log(skin);
        if (skin) {
            this.themesSvc.setSkin(skin);
        }
    }
    ThemesComponent.prototype.ngOnDestroy = function () {
    };
    ThemesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'themes',
            template: __webpack_require__("./src/app/themes/themes.component.html"),
            styles: [__webpack_require__("./src/app/themes/themes.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_themes_themes_service__["a" /* ThemesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_setting_setting_service__["a" /* SettingService */]])
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "./src/app/themes/themes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return ThemesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_component__ = __webpack_require__("./src/app/themes/themes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__themes_routing__ = __webpack_require__("./src/app/themes/themes.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThemesModule = /** @class */ (function () {
    function ThemesModule() {
    }
    ThemesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__themes_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__themes_component__["a" /* ThemesComponent */]
            ]
        })
    ], ThemesModule);
    return ThemesModule;
}());



/***/ }),

/***/ "./src/app/themes/themes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__themes_component__ = __webpack_require__("./src/app/themes/themes.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__themes_component__["a" /* ThemesComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=themes.module.chunk.js.map