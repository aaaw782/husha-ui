webpackJsonp(["directives.module"],{

/***/ "./src/app/directives/area-picker/area-picker-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">areaPicker<small class=\"font-xs text-disabled mar-l-xs\">directive</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <div class=\"pad-def mar-b-sm bor-def bg-white\">\n        <p class=\"text-primary\">如何使用</p>\n        <p>1.areaPicker指令和AreaPicker实例配合使用；</p>\n        <p>2.在input元素上使用areaPicker指令；</p>\n        <p>3.areaPicker指向一个AreaPicker实例。</p>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"form-inline clearfix mar-b-sm\">\n        <input class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" autocomplete=\"off\" placeholder=\"请输入籍贯\" [areaPicker]=\"areaPicker\" />\n    </form>\n\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/area-picker-demo/area-picker-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/area-picker-demo/area-picker-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>areaPicker</td>\n                    <td>AreaPicker</td>\n                    <td>\n                        AreaPicker实例。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-lg text-primary bor-b-dashed pad-b-def\">From:<span class=\"text-disabled\"> AreaPickerModule / AreaPickerDirective</span></p>\n    <p class=\"h4 m-b-sm block text-primary\">AreaPicker属性</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>init</td>\n                    <td>Function</td>\n                    <td>\n                        弹出选择框时触发的事件。在该方法内调用setData方法设置items第一个元素data值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>items</td>\n                    <td>\n                        &#123;&#10;&#32;&#32;&#32;&#32;&#108;&#97;&#98;&#101;&#108;&#63;&#58;&#32;&#115;&#116;&#114;&#105;&#110;&#103;&#44;&#10;&#32;&#32;&#32;&#32;&#101;&#108;&#101;&#109;&#63;&#58;&#32;&#72;&#84;&#77;&#76;&#69;&#108;&#101;&#109;&#101;&#110;&#116;&#44;&#10;&#32;&#32;&#32;&#32;&#107;&#101;&#121;&#58;&#32;&#115;&#116;&#114;&#105;&#110;&#103;&#44;&#10;&#32;&#32;&#32;&#32;&#100;&#97;&#116;&#97;&#58;&#32;&#97;&#110;&#121;&#91;&#93;&#44;&#10;&#32;&#32;&#32;&#32;&#115;&#101;&#108;&#101;&#99;&#116;&#101;&#100;&#58;&#32;&#70;&#117;&#110;&#99;&#116;&#105;&#111;&#110;&#10;&#32;&#32;&#125;&#91;&#93;\n                    </td>\n                    <td>\n                        <p>label:选项标签</p>\n                        <p>key:选项名读取的data的key</p>\n                        <p>data:选项数据</p>\n                        <p>selected:当前选项卡选择完毕触发的事件，在该方法内设置下一选项的数据</p>\n                    </td>\n                </tr>\n                <tr>\n                    <td>done</td>\n                    <td>\n                        Function\n                    </td>\n                    <td>\n                        选择完毕事件，传入参数为选择的各个data的元素\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/directives/area-picker/area-picker-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directives/area-picker/area-picker-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPickerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dolphinng__ = __webpack_require__("./src/dolphinng.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaPickerDemoComponent = /** @class */ (function () {
    function AreaPickerDemoComponent() {
        var _this = this;
        this.address = '';
        this.areaPicker = new __WEBPACK_IMPORTED_MODULE_1_dolphinng__["a" /* AreaPicker */]();
        this.tabIndex = 1;
        this.areaPicker.items = [{
                label: '省份',
                key: 'name',
                data: [],
                selected: function (data) {
                    setTimeout(function () {
                        _this.areaPicker.setData([{
                                name: '广州'
                            }, {
                                name: '阳江'
                            }, {
                                name: '佛山'
                            }]);
                    });
                }
            }, {
                label: '城市',
                key: 'name',
                data: [],
                selected: function (data) {
                    setTimeout(function () {
                        _this.areaPicker.setData([{
                                name: '天河区'
                            }, {
                                name: '海珠区'
                            }, {
                                name: '番禺区'
                            }]);
                    });
                }
            }, {
                label: '地区',
                key: 'name',
                data: [],
                selected: function (data) {
                }
            }];
        this.areaPicker.init = function () {
            setTimeout(function () {
                _this.areaPicker.setData([{
                        name: '广东省'
                    }, {
                        name: '广西壮族自治区'
                    }, {
                        name: '日本省'
                    }]);
            });
        };
        this.areaPicker.done = function (values) {
            console.log(values);
        };
    }
    AreaPickerDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    AreaPickerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'area-picker-demo',
            template: __webpack_require__("./src/app/directives/area-picker/area-picker-demo.component.html"),
            styles: [__webpack_require__("./src/app/directives/area-picker/area-picker-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AreaPickerDemoComponent);
    return AreaPickerDemoComponent;
}());



/***/ }),

/***/ "./src/app/directives/currency-format/currency-format-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">currencyFormat<small class=\"font-xs text-disabled mar-l-xs\">directive</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"form-inline clearfix mar-b-sm\">\n        <input class=\"form-control\" [(ngModel)]=\"amount\" currencyFormat name=\"amount\" placeholder=\"输入金额\" />\n        <p class=\"mar-t-xs\">注：该指令仅对input标签有效</p>\n    </form>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/currency-format-demo/currency-format-directive-demo.component.html\">\n    </code-high-light>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">CurrencyFormatModule / CurrencyFormatDirective</span></p>\n</div>"

/***/ }),

/***/ "./src/app/directives/currency-format/currency-format-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/directives/currency-format/currency-format-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatDemoComponent; });
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

var CurrencyFormatDemoComponent = /** @class */ (function () {
    function CurrencyFormatDemoComponent() {
        this.amount = null;
        this.tabIndex = 1;
    }
    CurrencyFormatDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    CurrencyFormatDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'currency-format-demo.',
            template: __webpack_require__("./src/app/directives/currency-format/currency-format-demo.component.html"),
            styles: [__webpack_require__("./src/app/directives/currency-format/currency-format-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyFormatDemoComponent);
    return CurrencyFormatDemoComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">指令</h2>\n</div>\n<div class=\"wrapper-md\">\n  <div class=\"bg-white pad-def\">\n\n    <p class=\"h3 m-b-sm block\">toggleClass</p>\n    <div>\n      <p class=\"text-disabled\">ToggleClassDirective</p>\n      <p>切换元素绑定的css类，当前支持点击切换，可关联另一个元素同步切换css类名。灵活使用该指令可实现多种效果。</p>\n      <table class=\"table table-bordered\">\n          <thead>\n          <th>参数</th>\n          <th>类型</th>\n          <th>是否必须</th>\n          <th>说明</th>\n          </thead>\n        <tbody>\n        <tr>\n          <td>toggleClass</td>\n          <td>string</td>\n          <td>是</td>\n          <td>要切换的CSS类，多个类名以空格连接</td>\n        </tr>\n        <tr>\n          <td>opt-target</td>\n          <td>string</td>\n          <td>否</td>\n          <td>关联元素的ID</td>\n        </tr>\n        <tr>\n          <td>opt-targetClass</td>\n          <td>string</td>\n          <td>否</td>\n          <td>关联元素的随指令元素切换的CSS类，多个类名以空格连接</td>\n        </tr>\n        <tr>\n          <td>opt-revokable</td>\n          <td>boolean</td>\n          <td>否</td>\n          <td>是否在点击其他地方时将css类重置</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div  class=\"line line-dashed b-b line-lg pull-in\"></div>\n    <p class=\"h3 m-b-sm block\">datePicker</p>\n    <div>\n      <p class=\"text-disabled\">DatePickerDirective</p>\n      <p>一个日期时间选择器</p>\n      <pre>\n        <code>\n    @Input('opt-event') event:string;//触发的时间\n    @Input('opt-format') format:string;//格式化\n    @Input('opt-ispicktime') isPickTime:boolean;//是否选择时间\n    @Input('opt-isclearbtn') isShowClearButton:boolean;//是否显示清空按钮\n    @Input('opt-istodaybtn') isShowTodayButton:boolean;//是否显示今天按钮\n    @Input('opt-issurebtn') isShowSureButton:boolean;//是否显示确定按钮\n    @Input('opt-festival') isShowFestival:boolean;//是否显示节日\n    @Input('opt-min') min:string;//最小日期\n    @Input('opt-max') max:string;//最大日期\n    @Input('opt-start') start:string;//开始日期\n    @Input('opt-end') end:string;//结束日期\n    @Input('opt-fixed') isFixed:boolean;//是否固定在可视区域\n    @Input('opt-zindex') zIndex:number;//css z-index\n    @Output() complete;//选择完成的回调\n        </code>\n      </pre>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/directives/directives.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directives/directives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesComponent; });
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

var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
    }
    DirectivesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'directives',
            template: __webpack_require__("./src/app/directives/directives.component.html"),
            styles: [__webpack_require__("./src/app/directives/directives.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], DirectivesComponent);
    return DirectivesComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_component__ = __webpack_require__("./src/app/directives/directives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_picker_area_picker_demo_component__ = __webpack_require__("./src/app/directives/area-picker/area-picker-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currency_format_currency_format_demo_component__ = __webpack_require__("./src/app/directives/currency-format/currency-format-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__html5_validate_html5_validate_demo_component__ = __webpack_require__("./src/app/directives/html5-validate/html5-validate-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_max_length_text_max_length_demo_component__ = __webpack_require__("./src/app/directives/text-max-length/text-max-length-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toggle_class_toggle_class_demo_component__ = __webpack_require__("./src/app/directives/toggle-class/toggle-class-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_routing__ = __webpack_require__("./src/app/directives/directives.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_8__directives_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__directives_component__["a" /* DirectivesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__area_picker_area_picker_demo_component__["a" /* AreaPickerDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__currency_format_currency_format_demo_component__["a" /* CurrencyFormatDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__html5_validate_html5_validate_demo_component__["a" /* HTML5ValidateDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__text_max_length_text_max_length_demo_component__["a" /* TextMaxLengthDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__toggle_class_toggle_class_demo_component__["a" /* ToggleClassDemoComponent */],
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/directives/directives.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_component__ = __webpack_require__("./src/app/directives/directives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_picker_area_picker_demo_component__ = __webpack_require__("./src/app/directives/area-picker/area-picker-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_format_currency_format_demo_component__ = __webpack_require__("./src/app/directives/currency-format/currency-format-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__html5_validate_html5_validate_demo_component__ = __webpack_require__("./src/app/directives/html5-validate/html5-validate-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_max_length_text_max_length_demo_component__ = __webpack_require__("./src/app/directives/text-max-length/text-max-length-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle_class_toggle_class_demo_component__ = __webpack_require__("./src/app/directives/toggle-class/toggle-class-demo.component.ts");







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__directives_component__["a" /* DirectivesComponent */]
    },
    { path: 'areaPickerDemo', component: __WEBPACK_IMPORTED_MODULE_2__area_picker_area_picker_demo_component__["a" /* AreaPickerDemoComponent */], data: { title: '地区选择' } },
    { path: 'currencyFormatDemo', component: __WEBPACK_IMPORTED_MODULE_3__currency_format_currency_format_demo_component__["a" /* CurrencyFormatDemoComponent */], data: { title: '输入金额格式化' } },
    { path: 'HTML5ValidateDemo', component: __WEBPACK_IMPORTED_MODULE_4__html5_validate_html5_validate_demo_component__["a" /* HTML5ValidateDemoComponent */], data: { title: '自定义HTML5校验' } },
    { path: 'textMaxLengthDemo', component: __WEBPACK_IMPORTED_MODULE_5__text_max_length_text_max_length_demo_component__["a" /* TextMaxLengthDemoComponent */], data: { title: '文字最大长度' } },
    { path: 'toggleClassDemo', component: __WEBPACK_IMPORTED_MODULE_6__toggle_class_toggle_class_demo_component__["a" /* ToggleClassDemoComponent */], data: { title: 'toggleClass' } },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/directives/html5-validate/html5-validate-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">自定义HTML5校验<small class=\"font-xs text-disabled mar-l-xs\">directive</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <div class=\"pad-def bor-def bg-white mar-b-sm\">\n        <p class=\"text-primary\">如何使用</p>\n        <p>1.areaPicker指令和AreaPicker实例配合使用；</p>\n        <p>1.在form元素上使用HTML5Validate指令；</p>\n        <p>2.在input元素上使用HTML5Validate指令；</p>\n        <p>3.input元素上的HTML5Validate属性值为一个1维度/2维数组；以数组为最小单位，数组第一个元素是一个boolean值，当表单验证不通过且这个布尔值为真时，提示语为数组第二个元素的字符串</p>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"form-inline clearfix mar-b-sm\" HTML5Validate>\n        <input class=\"form-control\" [(ngModel)]=\"name\" currencyFormat name=\"name\" placeholder=\"请输入名字\" required [HTML5Validate]=\"[!name,'请输入名字！']\" />\n        <input class=\"form-control\" [(ngModel)]=\"num\" currencyFormat name=\"num\" placeholder=\"输入数字\" required pattern=\"^\\d+$\" #numRef=\"ngModel\" [HTML5Validate]=\"[[!num,'请输入数字！'],[numRef.errors&&numRef.errors.pattern,'数字输入有误！']]\" />\n        <button class=\"btn btn-primary\" type=\"submit\">提交</button>\n    </form>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/HTML5Validate-demo/HTML5Validate-demo.component.html\">\n    </code-high-light>\n    <p class=\"h6 m-b-sm block text-primary\">From: <span class=\"text-disabled\">ValidateModule / HTML5ValidateDirective</span></p>\n</div>"

/***/ }),

/***/ "./src/app/directives/html5-validate/html5-validate-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/directives/html5-validate/html5-validate-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTML5ValidateDemoComponent; });
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

var HTML5ValidateDemoComponent = /** @class */ (function () {
    function HTML5ValidateDemoComponent() {
        this.name = '';
        this.num = null;
        this.tabIndex = 1;
    }
    HTML5ValidateDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    HTML5ValidateDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'html5-validate-demo',
            template: __webpack_require__("./src/app/directives/html5-validate/html5-validate-demo.component.html"),
            styles: [__webpack_require__("./src/app/directives/html5-validate/html5-validate-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], HTML5ValidateDemoComponent);
    return HTML5ValidateDemoComponent;
}());



/***/ }),

/***/ "./src/app/directives/text-max-length/text-max-length-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">文字最大长度<small class=\"font-xs text-disabled mar-l-xs\">directive</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"mar-b-sm pad-def bor-def bg-white\">\n        <div textMaxLength=\"200px\">最大长度200px:最大长度200px:最大长度200px:最大长度200px:最大长度200px:最大长度200px:最大长度200px:最大长度200px:最大长度200px:</div>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/text-max-length-demo/text-max-length-demo.component.html\">\n    </code-high-light>\n    <p class=\"h6 m-b-sm block text-primary\">From: <span class=\"text-disabled\">TextMaxLengthModule / TextMaxLengthDirective</span></p>\n\n</div>"

/***/ }),

/***/ "./src/app/directives/text-max-length/text-max-length-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/directives/text-max-length/text-max-length-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextMaxLengthDemoComponent; });
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

var TextMaxLengthDemoComponent = /** @class */ (function () {
    function TextMaxLengthDemoComponent() {
    }
    TextMaxLengthDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'text-max-length-demo',
            template: __webpack_require__("./src/app/directives/text-max-length/text-max-length-demo.component.html"),
            styles: [__webpack_require__("./src/app/directives/text-max-length/text-max-length-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], TextMaxLengthDemoComponent);
    return TextMaxLengthDemoComponent;
}());



/***/ }),

/***/ "./src/app/directives/toggle-class/toggle-class-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">toggleClass<small class=\"font-xs text-disabled mar-l-xs\">directive</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"mar-b-sm pad-def bor-def bg-white\">\n        <button type=\"button\" class=\"btn btn-default\" toggleClass=\"btn-primary\">点我</button>\n        <button type=\"button\" class=\"btn btn-default\" toggleClass=\"btn-danger\" [opt-revokable]=\"true\">点这里</button>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/text-max-length-demo/text-max-length-demo.component.html\">\n    </code-high-light>\n    <div class=\"bg-white pad-def bor-def mar-b-sm\">\n        <div>\n            <p>切换元素绑定的css类，当前支持点击切换，可关联另一个元素同步切换css类名。灵活使用该指令可实现多种效果。</p>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <th>参数</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>toggleClass</td>\n                        <td>string</td>\n                        <td>要切换的CSS类，多个类名以空格连接</td>\n                    </tr>\n                    <tr>\n                        <td>opt-target</td>\n                        <td>string</td>\n                        <td>关联元素的ID</td>\n                    </tr>\n                    <tr>\n                        <td>opt-targetClass</td>\n                        <td>string</td>\n                        <td>关联元素的随指令元素切换的CSS类，多个类名以空格连接</td>\n                    </tr>\n                    <tr>\n                        <td>opt-revokable</td>\n                        <td>boolean</td>\n                        <td>是否在点击其他地方时将css类重置</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From: <span class=\"text-disabled\">ToggleClassModule / ToggleClassDirective</span></p>\n\n</div>"

/***/ }),

/***/ "./src/app/directives/toggle-class/toggle-class-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directives/toggle-class/toggle-class-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleClassDemoComponent; });
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

var ToggleClassDemoComponent = /** @class */ (function () {
    function ToggleClassDemoComponent() {
    }
    ToggleClassDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toggle-class-demo',
            template: __webpack_require__("./src/app/directives/toggle-class/toggle-class-demo.component.html"),
            styles: [__webpack_require__("./src/app/directives/toggle-class/toggle-class-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ToggleClassDemoComponent);
    return ToggleClassDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=directives.module.chunk.js.map