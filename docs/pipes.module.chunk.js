webpackJsonp(["pipes.module"],{

/***/ "./src/app/pipes/currency/currency-pipe-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">currencyFormat<small class=\"font-xs text-disabled mar-l-xs\">pipe</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <ul class=\"mar-b-sm bg-white pad-def bor-def\">\n        <li class=\"mar-b-xs\">\n            <b>例1：</b><span class=\"text-gold\">{{123456789|currencyFormat}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例2：</b><span class=\"text-gold\">{{123456789|currencyFormat:'xx 元'}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例3：</b><span class=\"text-gold\">{{123456789|currencyFormat:'￥xx'}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例4：</b><span class=\"text-gold\">{{123456789|currencyFormat:['xx 元',4]}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例5：</b><span class=\"text-gold\">{{123456789|currencyFormat:['xx 元','-',0]}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例6：</b><span class=\"text-gold\">{{123456789.1234567|currencyFormat:6}}</span>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例7：</b><span class=\"text-gold\">{{123456789.1234567|currencyFormat:['￥xx',2,4]}}</span>\n        </li>\n    </ul>\n\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/currency-format-demo/currency-format-pipe-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">参数说明</p>\n    <div class=\"pad-def bg-white bor-def mar-b-sm\">\n        <p>假设参数为<b>p</b>，格式化表达式为<b>f</b><span class=\"text-disabled\">(字符串中“xx”表示格式化后的值，其余字符保留)</span>，精度为<b>d</b>，分隔符为<b>s</b>，每隔<b>l</b>作分隔。</p>\n        <div class=\"\">\n            <p>若<b>p</b>为string类型，则<b>f</b>=<b>p</b>；</p>\n            <p>若<b>p</b>为number类型，则<b>d</b>=<b>p</b>；</p>\n            <p>若<b>p</b>为数组，则<b>p</b>中的第一个string类型的元素表示<b>f</b>，第二个string类型的元素表示<b>s</b>，第一个number类型的元素表示<b>d</b>，第二个number类型的元素表示<b>l</b>；</p>\n        </div>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">CurrencyFormatModule/CurrencyFormatPipe</span></p>\n</div>"

/***/ }),

/***/ "./src/app/pipes/currency/currency-pipe-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pipes/currency/currency-pipe-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPipeDemoComponent; });
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

var CurrencyPipeDemoComponent = /** @class */ (function () {
    function CurrencyPipeDemoComponent() {
    }
    CurrencyPipeDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'currency-pipe-demo',
            template: __webpack_require__("./src/app/pipes/currency/currency-pipe-demo.component.html"),
            styles: [__webpack_require__("./src/app/pipes/currency/currency-pipe-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyPipeDemoComponent);
    return CurrencyPipeDemoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/date/date-pipe-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">日期格式化<small class=\"font-xs text-disabled mar-l-xs\">pipe</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <ul class=\"mar-b-sm bg-white pad-def bor-def\">\n        <li class=\"mar-b-xs\">\n            <b>原值：</b>2017/12/31 23:59:59\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例1：</b>{{'2017/12/31 23:59:59'|date:'yyyy-MM-dd hh:mm:ss'}}\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例2：</b>{{'2017/12/31 23:59:59'|date:'yyyy年MM月dd日 hh时mm分ss秒'}}\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例3：</b>{{'2017/12/31 23:59:59'|date:'yyyy-MM-dd'}}\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>例4：</b>{{1532768400000|date:'yyyy-MM-dd'}}\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>...</b>\n        </li>\n    </ul>\n\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/date-pipe-demo/date-pipe-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">参数</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>参数名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>format</td>\n                    <td>string</td>\n                    <td>\n                        格式。yyyy或YYYY代表年，MM代表月，dd或DD代表日，hh或HH代表时，mm代表分，ss或SS代表秒； 如：yyyy年MM月dd日 hh时mm分ss秒、yyyy-MM-dd hh:mm:ss\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">DateFormatModule/DatePipe</span></p>\n</div>"

/***/ }),

/***/ "./src/app/pipes/date/date-pipe-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/pipes/date/date-pipe-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipeDemoComponent; });
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

var DatePipeDemoComponent = /** @class */ (function () {
    function DatePipeDemoComponent() {
    }
    DatePipeDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-pipe-demo',
            template: __webpack_require__("./src/app/pipes/date/date-pipe-demo.component.html"),
            styles: [__webpack_require__("./src/app/pipes/date/date-pipe-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], DatePipeDemoComponent);
    return DatePipeDemoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pipes/pipes.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pipes/pipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesComponent; });
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

var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
    }
    PipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pipes',
            template: __webpack_require__("./src/app/pipes/pipes.component.html"),
            styles: [__webpack_require__("./src/app/pipes/pipes.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], PipesComponent);
    return PipesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_component__ = __webpack_require__("./src/app/pipes/pipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_date_pipe_demo_component__ = __webpack_require__("./src/app/pipes/date/date-pipe-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currency_currency_pipe_demo_component__ = __webpack_require__("./src/app/pipes/currency/currency-pipe-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_routing__ = __webpack_require__("./src/app/pipes/pipes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dolphinng__ = __webpack_require__("./src/dolphinng.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__pipes_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6_dolphinng__["d" /* CurrencyFormatModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_component__["a" /* PipesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__date_date_pipe_demo_component__["a" /* DatePipeDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__currency_currency_pipe_demo_component__["a" /* CurrencyPipeDemoComponent */],
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_component__ = __webpack_require__("./src/app/pipes/pipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_date_pipe_demo_component__ = __webpack_require__("./src/app/pipes/date/date-pipe-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_currency_pipe_demo_component__ = __webpack_require__("./src/app/pipes/currency/currency-pipe-demo.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pipes_component__["a" /* PipesComponent */]
    },
    {
        path: 'date',
        component: __WEBPACK_IMPORTED_MODULE_2__date_date_pipe_demo_component__["a" /* DatePipeDemoComponent */],
        data: { title: '日期格式化' }
    },
    {
        path: 'currency',
        component: __WEBPACK_IMPORTED_MODULE_3__currency_currency_pipe_demo_component__["a" /* CurrencyPipeDemoComponent */],
        data: { title: '货币格式化' }
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=pipes.module.chunk.js.map