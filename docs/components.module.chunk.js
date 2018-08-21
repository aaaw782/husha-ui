webpackJsonp(["components.module"],{

/***/ "./src/app/components/checkbox-demo/checkbox-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">checkbox<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"bg-white pad-def mar-b-sm bor-def\" name=\"form\">\n        <checkbox [(value)]=\"checkbox1\" innerStyle=\"checked\" customBackground=\"#ff6700\">{{checkbox1?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox2\" customBackground=\"#ff6700\">{{checkbox2?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox3\" [disabled]=\"true\">{{checkbox3?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox4\" display=\"block\" size=\"sm\" innerStyle=\"checked\">{{checkbox4?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox5\" display=\"block\" size=\"lg\" innerStyle=\"checked\">{{checkbox5?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox6\" display=\"block\" [disabled]=\"true\">{{checkbox6?'已选中':'未选中'}}</checkbox>\n        <checkbox [(value)]=\"checkbox7\" display=\"block\" styleClass=\"none\">{{checkbox7?'已选中':'未选中'}}</checkbox>\n    </form>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/checkbox-demo/checkbox-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>value</td>\n                    <td>boolean</td>\n                    <td>\n                        输入值。默认false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        组件尺寸。默认md,可选：lg、md、sm。\n                    </td>\n                </tr>\n                <tr>\n                    <td>display</td>\n                    <td>string </td>\n                    <td>\n                        显示方式。默认为行内，可选block（块级）\n                    </td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>any </td>\n                    <td>\n                        绑定在组件内input元素上disabled属性的值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>innerStyle</td>\n                    <td>string</td>\n                    <td>\n                        框内的样式，默认为正方形 ，可选 checked。\n                    </td>\n                </tr>\n                <tr>\n                    <td>customBackground</td>\n                    <td>string</td>\n                    <td>\n                        勾选时的背景，值为颜色值，如rgba(0,0,0,1)、#000000。\n                    </td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内最外层元素上的css类。\n                    </td>\n                </tr>\n                <tr>\n                    <td>name</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内input元素上name属性的值。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>valueChange</td>\n                    <td>\n                        <span [innerHtml]=\"'EventEmitter< any >'\"></span>\n                    </td>\n                    <td>\n                        输入值改变事件，触发时传入参数为value的值。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">CheckboxModule/CheckboxComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/checkbox-demo/checkbox-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/checkbox-demo/checkbox-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxDemoComponent; });
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

var CheckboxDemoComponent = /** @class */ (function () {
    function CheckboxDemoComponent() {
        this.checkbox1 = false;
        this.checkbox2 = false;
        this.checkbox3 = false;
        this.checkbox4 = false;
        this.checkbox5 = false;
        this.checkbox6 = false;
        this.checkbox7 = false;
    }
    CheckboxDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'checkbox-demo',
            template: __webpack_require__("./src/app/components/checkbox-demo/checkbox-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/checkbox-demo/checkbox-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxDemoComponent);
    return CheckboxDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">组件</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
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

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'components',
            template: __webpack_require__("./src/app/components/components.component.html"),
            styles: [__webpack_require__("./src/app/components/components.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component__ = __webpack_require__("./src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_demo_modal_demo_component__ = __webpack_require__("./src/app/components/modal-demo/modal-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginator_demo_paginator_demo_component__ = __webpack_require__("./src/app/components/paginator-demo/paginator-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_components_layout_components_component__ = __webpack_require__("./src/app/components/layout-components/layout-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_components_nav_components_component__ = __webpack_require__("./src/app/components/nav-components/nav-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinner_demo_spinner_demo_component__ = __webpack_require__("./src/app/components/spinner-demo/spinner-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__searchbar_searchbar_component__ = __webpack_require__("./src/app/components/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__searchbar_demo_searchbar_demo_component__ = __webpack_require__("./src/app/components/searchbar-demo/searchbar-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gallery_demo_gallery_demo_component__ = __webpack_require__("./src/app/components/gallery-demo/gallery-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__drop_down_demo_dropdown_demo_component__ = __webpack_require__("./src/app/components/drop-down-demo/dropdown-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__slide_down_demo_slide_down_demo_component__ = __webpack_require__("./src/app/components/slide-down-demo/slide-down-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__uploader_demo_uploader_demo_component__ = __webpack_require__("./src/app/components/uploader-demo/uploader-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__delete_wrap_demo_delete_wrap_demo_component__ = __webpack_require__("./src/app/components/delete-wrap-demo/delete-wrap-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__slider_slider_demo_component__ = __webpack_require__("./src/app/components/slider/slider-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__datetime_picker_demo_datetime_picker_demo_component__ = __webpack_require__("./src/app/components/datetime-picker-demo/datetime-picker-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__checkbox_demo_checkbox_demo_component__ = __webpack_require__("./src/app/components/checkbox-demo/checkbox-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__radio_demo_radio_demo_component__ = __webpack_require__("./src/app/components/radio-demo/radio-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toggle_demo_toggle_demo_component__ = __webpack_require__("./src/app/components/toggle-demo/toggle-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__switch_demo_switch_demo_component__ = __webpack_require__("./src/app/components/switch-demo/switch-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__select_demo_select_demo_component__ = __webpack_require__("./src/app/components/select-demo/select-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_dolphinng__ = __webpack_require__("./src/dolphinng.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_routing__ = __webpack_require__("./src/app/components/components.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_23__components_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_22_dolphinng__["l" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_22_dolphinng__["k" /* LoaderModule */],
                __WEBPACK_IMPORTED_MODULE_22_dolphinng__["j" /* LayoutModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_component__["a" /* ComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__modal_demo_modal_demo_component__["a" /* ModalDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__paginator_demo_paginator_demo_component__["a" /* PaginatorDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__layout_components_layout_components_component__["a" /* LayoutComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_components_nav_components_component__["a" /* NavComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__searchbar_demo_searchbar_demo_component__["a" /* SearchbarDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__spinner_demo_spinner_demo_component__["a" /* SpinnerDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__searchbar_searchbar_component__["a" /* SearchbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__gallery_demo_gallery_demo_component__["a" /* GalleryDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__drop_down_demo_dropdown_demo_component__["a" /* DropDownDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__uploader_demo_uploader_demo_component__["a" /* UploaderDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__delete_wrap_demo_delete_wrap_demo_component__["a" /* DeleteWrapDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__slider_slider_demo_component__["a" /* SliderDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__datetime_picker_demo_datetime_picker_demo_component__["a" /* DatetimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__checkbox_demo_checkbox_demo_component__["a" /* CheckboxDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__radio_demo_radio_demo_component__["a" /* RadioDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__toggle_demo_toggle_demo_component__["a" /* ToggleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__switch_demo_switch_demo_component__["a" /* SwitchDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__select_demo_select_demo_component__["a" /* SelectDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__slide_down_demo_slide_down_demo_component__["a" /* SlideDownDemoComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_component__ = __webpack_require__("./src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_demo_modal_demo_component__ = __webpack_require__("./src/app/components/modal-demo/modal-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginator_demo_paginator_demo_component__ = __webpack_require__("./src/app/components/paginator-demo/paginator-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_components_layout_components_component__ = __webpack_require__("./src/app/components/layout-components/layout-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_components_nav_components_component__ = __webpack_require__("./src/app/components/nav-components/nav-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spinner_demo_spinner_demo_component__ = __webpack_require__("./src/app/components/spinner-demo/spinner-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__searchbar_demo_searchbar_demo_component__ = __webpack_require__("./src/app/components/searchbar-demo/searchbar-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_demo_gallery_demo_component__ = __webpack_require__("./src/app/components/gallery-demo/gallery-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drop_down_demo_dropdown_demo_component__ = __webpack_require__("./src/app/components/drop-down-demo/dropdown-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__slide_down_demo_slide_down_demo_component__ = __webpack_require__("./src/app/components/slide-down-demo/slide-down-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__uploader_demo_uploader_demo_component__ = __webpack_require__("./src/app/components/uploader-demo/uploader-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delete_wrap_demo_delete_wrap_demo_component__ = __webpack_require__("./src/app/components/delete-wrap-demo/delete-wrap-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slider_slider_demo_component__ = __webpack_require__("./src/app/components/slider/slider-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datetime_picker_demo_datetime_picker_demo_component__ = __webpack_require__("./src/app/components/datetime-picker-demo/datetime-picker-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checkbox_demo_checkbox_demo_component__ = __webpack_require__("./src/app/components/checkbox-demo/checkbox-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__radio_demo_radio_demo_component__ = __webpack_require__("./src/app/components/radio-demo/radio-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toggle_demo_toggle_demo_component__ = __webpack_require__("./src/app/components/toggle-demo/toggle-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__switch_demo_switch_demo_component__ = __webpack_require__("./src/app/components/switch-demo/switch-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__select_demo_select_demo_component__ = __webpack_require__("./src/app/components/select-demo/select-demo.component.ts");




















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_component__["a" /* ComponentsComponent */]
    },
    { path: 'modalDemo', component: __WEBPACK_IMPORTED_MODULE_2__modal_demo_modal_demo_component__["a" /* ModalDemoComponent */], data: { title: '模态框' } },
    { path: 'paginatorDemo', component: __WEBPACK_IMPORTED_MODULE_3__paginator_demo_paginator_demo_component__["a" /* PaginatorDemoComponent */], data: { title: '分页' } },
    { path: 'layoutComponents', component: __WEBPACK_IMPORTED_MODULE_4__layout_components_layout_components_component__["a" /* LayoutComponentsComponent */], data: { title: '布局组件' } },
    { path: 'navComponents', component: __WEBPACK_IMPORTED_MODULE_5__nav_components_nav_components_component__["a" /* NavComponentsComponent */], data: { title: '左侧菜单组件' } },
    { path: 'spinnerDemo', component: __WEBPACK_IMPORTED_MODULE_6__spinner_demo_spinner_demo_component__["a" /* SpinnerDemoComponent */], data: { title: 'Spinner' } },
    { path: 'searchbarDemo', component: __WEBPACK_IMPORTED_MODULE_7__searchbar_demo_searchbar_demo_component__["a" /* SearchbarDemoComponent */], data: { title: 'Searchbar' } },
    { path: 'galleryDemo', component: __WEBPACK_IMPORTED_MODULE_8__gallery_demo_gallery_demo_component__["a" /* GalleryDemoComponent */], data: { title: '画廊' } },
    { path: 'dropDownDemo', component: __WEBPACK_IMPORTED_MODULE_9__drop_down_demo_dropdown_demo_component__["a" /* DropDownDemoComponent */], data: { title: 'drop-down' } },
    { path: 'slideDownDemo', component: __WEBPACK_IMPORTED_MODULE_10__slide_down_demo_slide_down_demo_component__["a" /* SlideDownDemoComponent */], data: { title: 'slide-down' } },
    { path: 'uploaderDemo', component: __WEBPACK_IMPORTED_MODULE_11__uploader_demo_uploader_demo_component__["a" /* UploaderDemoComponent */], data: { title: '文件上传' } },
    { path: 'deleteWrapDemo', component: __WEBPACK_IMPORTED_MODULE_12__delete_wrap_demo_delete_wrap_demo_component__["a" /* DeleteWrapDemoComponent */], data: { title: '右上角删除控件' } },
    { path: 'sliderDemo', component: __WEBPACK_IMPORTED_MODULE_13__slider_slider_demo_component__["a" /* SliderDemoComponent */], data: { title: '滑块' } },
    { path: 'datetimePickerDemo', component: __WEBPACK_IMPORTED_MODULE_14__datetime_picker_demo_datetime_picker_demo_component__["a" /* DatetimePickerComponent */], data: { title: '时间日期选择器' } },
    { path: 'checkboxDemo', component: __WEBPACK_IMPORTED_MODULE_15__checkbox_demo_checkbox_demo_component__["a" /* CheckboxDemoComponent */], data: { title: 'checkbox' } },
    { path: 'radioDemo', component: __WEBPACK_IMPORTED_MODULE_16__radio_demo_radio_demo_component__["a" /* RadioDemoComponent */], data: { title: 'radio' } },
    { path: 'toggleDemo', component: __WEBPACK_IMPORTED_MODULE_17__toggle_demo_toggle_demo_component__["a" /* ToggleDemoComponent */], data: { title: 'toggle' } },
    { path: 'switchDemo', component: __WEBPACK_IMPORTED_MODULE_18__switch_demo_switch_demo_component__["a" /* SwitchDemoComponent */], data: { title: 'switch' } },
    { path: 'selectDemo', component: __WEBPACK_IMPORTED_MODULE_19__select_demo_select_demo_component__["a" /* SelectDemoComponent */], data: { title: 'select' } },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/components/datetime-picker-demo/datetime-picker-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">datetime-picker<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n\n    <div class=\"clearfix\">\n        <div class=\"pull-left pad-r-sm mar-b-sm\">\n            <datetime-picker [(value)]=\"date\">\n                <input class=\"form-control\" [(ngModel)]=\"date\" placeholder=\"选择日期\" />\n            </datetime-picker>\n        </div>\n        <div class=\"pull-left pad-r-sm mar-b-sm\">\n            <datetime-picker [(value)]=\"date1\" format=\"yyyy-MM-dd hh:mm:ss\">\n                <input class=\"form-control\" [(ngModel)]=\"date1\" placeholder=\"选择日期时间\" />\n            </datetime-picker>\n        </div>\n        <div class=\"pull-left pad-r-sm mar-b-sm\">\n            <datetime-picker [(value)]=\"date2\" format=\"yyyy年MM月dd日hh时mm分\">\n                <input class=\"form-control\" [(ngModel)]=\"date2\" placeholder=\"选择日期时间\" />\n            </datetime-picker>\n        </div>\n        <div class=\"pull-left pad-r-sm mar-b-sm\">\n            <datetime-picker [(value)]=\"date3\" format=\"yyyy-MM-dd\" min=\"2017-12-02\" max=\"2017-12-28\">\n                <input class=\"form-control\" [(ngModel)]=\"date3\" placeholder=\"选择日期\" />\n            </datetime-picker>\n        </div>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/datetime-picker-demo/datetime-picker-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>value</td>\n                    <td>string</td>\n                    <td>\n                        输入绑定。\n                    </td>\n                </tr>\n                <tr>\n                    <td>format</td>\n                    <td>string</td>\n                    <td>\n                        格式化 yyyy-MM-dd hh:mm:ss。默认yyyy-MM-dd\n                    </td>\n                </tr>\n                <tr>\n                    <td>min</td>\n                    <td>string</td>\n                    <td>\n                        最小日期限制，当启用最大最小限制时 min的日期格式必须与本组件format相匹配。\n                    </td>\n                </tr>\n                <tr>\n                    <td>max</td>\n                    <td>string</td>\n                    <td>\n                        最大日期限制，当启用最大最小限制时 max的日期格式必须与本组件format相匹配。\n                    </td>\n                </tr>\n                <tr>\n                    <td>start</td>\n                    <td>string</td>\n                    <td>\n                        最小可选日期（时间），默认1970/01/01。\n                    </td>\n                </tr>\n                <tr>\n                    <td>end</td>\n                    <td>string</td>\n                    <td>\n                        最大可选日期（时间），默认2070/12/31。\n                    </td>\n                </tr>\n                <tr>\n                    <td>trigger</td>\n                    <td>string</td>\n                    <td>\n                        触发事件，默认focus。\n                    </td>\n                </tr>\n                <tr>\n                    <td>zIndex</td>\n                    <td>string|number</td>\n                    <td>\n                        层级，默认999。\n                    </td>\n                </tr>\n                <tr>\n                    <td>isCalendar</td>\n                    <td>boolean</td>\n                    <td>\n                        是否显示节日，默认false。(暂不支持)\n                    </td>\n                </tr>\n                <tr>\n                    <td>direction</td>\n                    <td>string</td>\n                    <td>\n                        方向，无默认值，可选top、bottom。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>valueChange</td>\n                    <td> EventEmitter\n                        < string>\n                    </td>\n                    <td>\n                        输出绑定。\n                    </td>\n                </tr>\n                <tr>\n                    <td>complete</td>\n                    <td>string</td>\n                    <td>\n                        选择完成事件，触发时传入参数为按格式输出的时间字符串。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">DatetimePickerModule / DatetimePickerComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/datetime-picker-demo/datetime-picker-demo.component.less":
/***/ (function(module, exports) {

module.exports = "datetime-picker input.form-control {\n  max-width: 200px;\n}\n"

/***/ }),

/***/ "./src/app/components/datetime-picker-demo/datetime-picker-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePickerComponent; });
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


var DatetimePickerComponent = /** @class */ (function () {
    function DatetimePickerComponent(pop) {
        this.pop = pop;
        this.date = '';
        this.date1 = '';
        this.date2 = '';
        this.date3 = '';
    }
    DatetimePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'datetime-picker-demo',
            template: __webpack_require__("./src/app/components/datetime-picker-demo/datetime-picker-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/datetime-picker-demo/datetime-picker-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]])
    ], DatetimePickerComponent);
    return DatetimePickerComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-wrap-demo/delete-wrap-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">hover显示删除按钮<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"\">\n        <delete-wrap *ngFor=\"let img of galleryImages;let i=index\" size=\"sm\" (remove)=\"deleteConfirm(i)\">\n            <a class=\"img-wrap\">\n                <img [src]=\"img.a.b\" />\n            </a>\n        </delete-wrap>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/delete-wrap-demo/delete-wrap-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">属性</p>\n    <div class=\"pad-def bg-white bor-def mar-b-sm\">\n        <p>@Input() <b>size</b>:string;<span class=\"text-disabled\">//删除按钮尺寸。默认md,可选：lg、md、sm、xs</span></p>\n        <p>@Output() <b>Output</b>:EventEmitter\n            < any>;<span class=\"text-disabled\">//删除按钮点击事件</span></p>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">LayoutModule/DeleteWrapComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/delete-wrap-demo/delete-wrap-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/delete-wrap-demo/delete-wrap-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteWrapDemoComponent; });
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


var DeleteWrapDemoComponent = /** @class */ (function () {
    function DeleteWrapDemoComponent(pop) {
        this.pop = pop;
        this.galleryImages = [
            { a: { b: './assets/img/b1.jpg' } },
            { a: { b: './assets/img/b2.jpg' } },
            { a: { b: './assets/img/b3.jpg' } },
            { a: { b: './assets/img/b4.jpg' } },
            { a: { b: './assets/img/b5.jpg' } },
            { a: { b: './assets/img/b6.jpg' } },
            { a: { b: './assets/img/b7.jpg' } },
            { a: { b: './assets/img/b8.jpg' } },
            { a: { b: './assets/img/b9.jpg' } },
            { a: { b: './assets/img/b10.jpg' } },
            { a: { b: './assets/img/c1.jpg' } },
        ];
    }
    DeleteWrapDemoComponent.prototype.deleteConfirm = function (index) {
        var _this = this;
        this.pop.confirm({
            text: '确定要删除第' + (index + 1) + '张图片吗？'
        }).onConfirm(function () {
            _this.galleryImages.splice(index, 1);
        });
    };
    DeleteWrapDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'delete-wrap-demo',
            template: __webpack_require__("./src/app/components/delete-wrap-demo/delete-wrap-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/delete-wrap-demo/delete-wrap-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]])
    ], DeleteWrapDemoComponent);
    return DeleteWrapDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/drop-down-demo/dropdown-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">展开/隐藏\n        <small class=\"font-xs text-disabled padding-left-default\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <table class=\"table table-bordered bg-white\">\n        <tr>\n            <td width=\"15%\"><b>类名</b></td>\n            <td>\n                DropDownComponent\n            </td>\n        </tr>\n        <tr>\n            <td><b>所属模块</b></td>\n            <td>DropDownModule</td>\n        </tr>\n        <tr>\n            <td><b>类型</b></td>\n            <td>组件</td>\n        </tr>\n        <tr>\n            <td><b>selector</b></td>\n            <td>\n                drop-down\n            </td>\n        </tr>\n    </table>\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"mar-b-sm\">\n        <div class=\"pad-b-sm\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"dropdown.toggle()\">点我</button>\n        </div>\n        <drop-down #dropdown>\n            <div style=\"background-color: #fff;border:1px solid #ddd;height: 200px;padding: 10px;\">\n                这里是可展开/隐藏的区域\n            </div>\n        </drop-down>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/drop-down-demo/dropdown-demo.component.html\">\n    </code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">属性</p>\n    <table class=\"table table-bordered bg-white\">\n        <thead class=\"bg-default\">\n            <tr>\n                <th>属性名</th>\n                <th>类型</th>\n                <th>输入/输出类型</th>\n                <th>说明</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>animateTime</td>\n                <td>Input</td>\n                <td>number</td>\n                <td>\n                    过渡动画执行时间(单位：秒)。\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <p class=\"h4 m-b-sm block text-primary\">方法</p>\n    <table class=\"table table-bordered bg-white\">\n        <thead class=\"bg-default\">\n            <tr>\n                <th>方法名</th>\n                <th>参数</th>\n                <th>参数类型</th>\n                <th>说明</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><i>open</i></td>\n                <td>无</td>\n                <td>-</td>\n                <td>\n                    展开\n                </td>\n            </tr>\n            <tr>\n                <td><i>close</i></td>\n                <td>无</td>\n                <td>-</td>\n                <td>\n                    收起。\n                </td>\n            </tr>\n            <tr>\n                <td><i>toggle</i></td>\n                <td>无</td>\n                <td>-</td>\n                <td>\n                    展开/收起切换。\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<gallery #gallery [data]=\"galleryImages\" [dataProps]=\"['a','b']\"></gallery>"

/***/ }),

/***/ "./src/app/components/drop-down-demo/dropdown-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n  margin-right: 10px;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/drop-down-demo/dropdown-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownDemoComponent; });
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

var DropDownDemoComponent = /** @class */ (function () {
    function DropDownDemoComponent() {
        this.tabIndex = 1;
        this.galleryImages = [
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
            { a: { b: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502945336494&di=e76c1de82f2fae334335f389e66618f3&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1029%2Fzyz%2F03%2F14583115_1350966109847.jpg' } },
        ];
    }
    DropDownDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    DropDownDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drop-down-demo',
            template: __webpack_require__("./src/app/components/drop-down-demo/dropdown-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/drop-down-demo/dropdown-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], DropDownDemoComponent);
    return DropDownDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery-demo/gallery-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">画廊\n        <small class=\"font-xs text-disabled padding-left-default\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div>\n        <button class=\"btn btn-info mar-b-sm\" (click)=\"gallery.open('./assets/img/c3.jpg')\">打开一张图片</button>\n        <button class=\"btn btn-info mar-b-sm\" (click)=\"gallery.open(2,$event)\">从点击处打开第三张图片</button>\n        <button class=\"btn btn-info mar-b-sm\" (click)=\"gallery.open(3)\">打开第4张图片</button>\n        <button class=\"btn btn-info mar-b-sm\" (click)=\"gallery.open($event)\">从点击处打开一组图片</button>\n        <button class=\"btn btn-info mar-b-sm\" (click)=\"gallery.open()\">打开一组图片</button>\n    </div>\n    <div>\n        <a class=\"img-wrap\" *ngFor=\"let img of galleryImages;let i=index\" (click)=\"gallery.open($event,i)\">\n            <img [src]=\"img.a.b\" />\n        </a>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/gallery-demo/gallery-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/gallery-demo/gallery-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>data</td>\n                    <td>any[]</td>\n                    <td>\n                        包含图片地址的数据。\n                    </td>\n                </tr>\n                <tr>\n                    <td>dataProps</td>\n                    <td>string[] </td>\n                    <td>\n                        &#100;&#97;&#116;&#97;&#20803;&#32032;&#35775;&#38382;&#22270;&#29255;&#22320;&#22336;&#30340;&#107;&#101;&#121;&#12290;&#22914;&#100;&#97;&#116;&#97;&#61;&#91;&#123;&#97;&#58;&#123;&#98;&#58;&#123;&#99;&#58;&#22270;&#29255;&#22320;&#22336;&#125;&#125;&#125;&#93;&#65292;&#100;&#97;&#116;&#97;&#80;&#114;&#111;&#112;&#115;&#24212;&#20026;&#91;&#39;&#97;&#39;&#44;&#39;&#98;&#39;&#44;&#39;&#99;&#39;&#93;\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        组件尺寸。默认全屏，可选lg、md、sm、xs\n                    </td>\n                </tr>\n                <tr>\n                    <td>title</td>\n                    <td>string</td>\n                    <td>\n                        标题\n                    </td>\n                </tr>\n                <tr>\n                    <td>isAnimation</td>\n                    <td>string|boolean</td>\n                    <td>\n                        是否有过渡动画。默认为true\n                    </td>\n                </tr>\n                <tr>\n                    <td>isHeader</td>\n                    <td>string|boolean</td>\n                    <td>\n                        是否显示头部。默认为false\n                    </td>\n                </tr>\n                <tr>\n                    <td>isToolsBar</td>\n                    <td>string|boolean</td>\n                    <td>\n                        是否显示工具栏。默认为false\n                    </td>\n                </tr>\n                <tr>\n                    <td>isBtnDownload</td>\n                    <td>string|boolean</td>\n                    <td>\n                        是否显示工具栏的下载按钮(不显示工具栏时该值无效)。默认为false\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>onChange</td>\n                    <td>EventEmitter\n                        < number>\n                    </td>\n                    <td>\n                        图片切换时（number为图片index）。\n                    </td>\n                </tr>\n                <tr>\n                    <td>onClose</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        关闭时\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">方法</p>\n    <p><i class=\"pad-r-xs bold\">open</i> 打开gallery</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>参数</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>...args</td>\n                    <td>\n                        <p>打开。参数长度和顺序不定。传入的：</p>\n                        <p>第一个Event参数（模版中$event）作为触发事件；</p>\n                        <p>第一个字符串作为单张图片地址，第二个以及第二个之后的字符串作为标题title；</p>\n                        <p>第一个数字类型的参数作为浏览多张图片时当前查看图片的index；</p>\n                        <p>第一个数组作为data，第二个数组作为dataProps。</p>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p><i class=\"pad-r-xs bold\">close</i> 关闭gallery</p>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">GalleryModule/GalleryComponent</span></p>\n</div>\n<gallery #gallery [data]=\"galleryImages\" [dataProps]=\"['a','b']\"></gallery>"

/***/ }),

/***/ "./src/app/components/gallery-demo/gallery-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n  margin-right: 10px;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/gallery-demo/gallery-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryDemoComponent; });
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

var GalleryDemoComponent = /** @class */ (function () {
    function GalleryDemoComponent() {
        this.tabIndex = 1;
        this.galleryImages = [
            { a: { b: './assets/img/b1.jpg' } },
            { a: { b: './assets/img/b2.jpg' } },
            { a: { b: './assets/img/b3.jpg' } },
            { a: { b: './assets/img/b4.jpg' } },
            { a: { b: './assets/img/b5.jpg' } },
            { a: { b: './assets/img/b6.jpg' } },
            { a: { b: './assets/img/b7.jpg' } },
            { a: { b: './assets/img/b8.jpg' } },
            { a: { b: './assets/img/b9.jpg' } },
            { a: { b: './assets/img/b10.jpg' } },
            { a: { b: './assets/img/c1.jpg' } },
        ];
    }
    GalleryDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    GalleryDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gallery-demo',
            template: __webpack_require__("./src/app/components/gallery-demo/gallery-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/gallery-demo/gallery-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], GalleryDemoComponent);
    return GalleryDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/layout-components/layout-components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">Layout<small class=\"font-xs text-disabled padding-left-default\"></small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <p>如本站整体布局所示</p>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/layout-components/layout-components.component.html\">\n    </code-high-light>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>类名</th>\n                    <th>模块</th>\n                    <th>selector</th>\n                    <th>属性</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>RootContainerComponent</td>\n                    <td>LayoutModule</td>\n                    <td>root-container</td>\n                    <td>\n                        <p>@Input() headerFixed:boolean;<span class=\"text-disabled\">//是否顶部固定</span></p>\n                        <p>@Input() asideFixed:boolean;<span class=\"text-disabled\">//是否左侧固定</span></p>\n                        <p>@Input() asideFolded:boolean;<span class=\"text-disabled\">//是否收起左侧菜单</span></p>\n                        <!--  <p>@Input() asideDock:boolean;<span class=\"text-disabled\">//暂不支持</span></p>\n                  <p>@Input() container:boolean;<span class=\"text-disabled\">//暂不支持</span></p>-->\n                        <p>@Input() offScreen:boolean;<span class=\"text-disabled\">//是否处于小屏幕时展开菜单（此时遮住屏幕）</span></p>\n                    </td>\n                    <td>是整体布局的根组件，控制页面整体布局</td>\n                </tr>\n                <tr>\n                    <td>HeaderComponent</td>\n                    <td>LayoutModule</td>\n                    <td>header</td>\n                    <td>\n                        @Input() theme:string='';<span class=\"text-disabled\">//主题  当前可选：black、cerulean，默认black</span>\n                    </td>\n                    <td>顶部布局组件</td>\n                </tr>\n                <tr>\n                    <td>HeaderLeftComponent</td>\n                    <td>LayoutModule</td>\n                    <td>header-left</td>\n                    <td>\n                        @Input() theme:string='';<span class=\"text-disabled\">//主题  当前可选：black、cerulean，默认black</span>\n                    </td>\n                    <td>顶部左边，header的子组件。</td>\n                </tr>\n                <tr>\n                    <td>HeaderRightComponent</td>\n                    <td>LayoutModule</td>\n                    <td>header-right</td>\n                    <td>\n                        @Input() theme:string='';<span class=\"text-disabled\">//主题  当前可选：black、cerulean、white，默认black</span>\n                    </td>\n                    <td>顶部右边，header的子组件。</td>\n                </tr>\n                <tr>\n                    <td>AsideLeftComponent</td>\n                    <td>LayoutModule</td>\n                    <td>aside-left</td>\n                    <td>\n                        @Input() theme:string='';<span class=\"text-disabled\">//主题  当前可选：black、cerulean-outline、white，默认black</span>\n                    </td>\n                    <td>左侧边栏布局组件。</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/layout-components/layout-components.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout-components/layout-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponentsComponent = /** @class */ (function () {
    function LayoutComponentsComponent() {
    }
    LayoutComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout-components',
            template: __webpack_require__("./src/app/components/layout-components/layout-components.component.html"),
            styles: [__webpack_require__("./src/app/components/layout-components/layout-components.component.less")],
        })
    ], LayoutComponentsComponent);
    return LayoutComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-demo/modal-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">modal\n        <small class=\"font-xs text-disabled padding-left-default\">Component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"demo-btns\">\n        <button class=\"btn btn-default\" (click)=\"showModal()\">默认模态框(md)</button>\n        <button class=\"btn btn-primary\" (click)=\"showModal('lg')\">大模态框(lg)</button>\n        <button class=\"btn btn-info\" (click)=\"showModal('sm')\">小模态框(sm)</button>\n        <button class=\"btn btn-info\" (click)=\"modal.open()\">open</button>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/modal-demo/modal-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/modal-demo/modal-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n\n    <p class=\"h4 m-b-sm block text-primary\">@Input <span class=\"h5 text-disabled\">(modal-header,modal-body,modal-footer仅支持stylClass属性)</span></p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>visible</td>\n                    <td>boolean</td>\n                    <td>\n                        控制显示和隐藏\n                    </td>\n                </tr>\n                <tr>\n                    <td>overflow</td>\n                    <td>boolean</td>\n                    <td>\n                        是否溢出屏幕，默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>animated</td>\n                    <td>boolean</td>\n                    <td>\n                        是否有过渡动画，默认为true。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        模态框尺寸，默认为md，可选lg、md、sm。\n                    </td>\n                </tr>\n                <tr>\n                    <td>fullHeight</td>\n                    <td>boolean</td>\n                    <td>\n                        是否默认撑满屏幕高度；默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>boolean</td>\n                    <td>\n                        是否禁用（有遮罩）；默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>outClickClose</td>\n                    <td>boolean</td>\n                    <td>\n                        是否点击空白处关闭；默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>showCloseButton</td>\n                    <td>boolean</td>\n                    <td>\n                        是否显示关闭按钮；默认为true。\n                    </td>\n                </tr>\n                <tr>\n                    <td>width</td>\n                    <td>number</td>\n                    <td>\n                        模态框宽度。\n                    </td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>\n                        添加到组件内最外层元素上的css类。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>visibleChange</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        visible改变事件；触发时传入参数为visible。\n                    </td>\n                </tr>\n                <tr>\n                    <td>onOpen</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        模态框从隐藏到显示完成时的事件；触发时传入参数为visible。\n                    </td>\n                </tr>\n                <tr>\n                    <td>onClose</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        模态框关闭事件；触发时传入参数为visible。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white no-margin\">\n            <tr>\n                <td rowspan=\"5\" style=\"width: 12em\">\n                    <b>ModalModule</b>\n                </td>\n            </tr>\n            <tr>\n                <td>ModalComponent<span class=\"text-disabled pad-l-def\">modal</span></td>\n            </tr>\n            <tr>\n                <td>ModalHeaderComponent<span class=\"text-disabled pad-l-def\">modal-header</span></td>\n            </tr>\n            <tr>\n                <td>ModalBodyComponent<span class=\"text-disabled pad-l-def\">modal-body</span></td>\n            </tr>\n            <tr>\n                <td>ModalFooterComponent<span class=\"text-disabled pad-l-def\">modal-footer</span></td>\n            </tr>\n        </table>\n    </div>\n    <div class=\"bg-white pad-def mar-b-sm\">\n        <p class=\"text-primary\">关系：</p>\n        <p>1.modal是父组件，modal-header、modal-body、modal-footer是子组件；</p>\n        <p>2.子组件应被包含在父组件中。</p>\n        <p class=\"text-primary\">两种使用方式：</p>\n        <p>1.通过属性visible双向绑定控制显示/隐藏；</p>\n        <p>2.通过声明模版变量（指向组件实例），调用open/close方法控制显示/隐藏。</p>\n    </div>\n</div>\n<modal [(visible)]=\"isShowModal\" [size]=\"modalSize\">\n    <modal-header>\n        <h4 class=\"modal-title\">Modal title </h4>\n    </modal-header>\n    <modal-body>\n        <p style=\"height: 100px\">One fine body&hellip;</p>\n    </modal-body>\n    <modal-footer>\n        <button class=\"btn btn-default\" (click)=\"closeModal()\">关闭</button>\n        <button class=\"btn btn-primary\">保存</button>\n    </modal-footer>\n</modal>\n<modal size=\"md\" #modal>\n    <modal-header>\n        <h4 class=\"modal-title\">Modal title </h4>\n    </modal-header>\n    <modal-body>\n        <p style=\"height: 100px\">这是调用open方法打开的模态框</p>\n    </modal-body>\n    <modal-footer>\n        <button class=\"btn btn-default\" (click)=\"modal.close()\">关闭</button>\n    </modal-footer>\n</modal>"

/***/ }),

/***/ "./src/app/components/modal-demo/modal-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".demo-btns .btn {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/modal-demo/modal-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDemoComponent; });
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

var ModalDemoComponent = /** @class */ (function () {
    function ModalDemoComponent() {
        this.isShowModal = false;
        this.modalSize = 'md';
        this.tabIndex = 1;
    }
    ModalDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    ModalDemoComponent.prototype.closeModal = function () {
        this.isShowModal = false;
    };
    ModalDemoComponent.prototype.showModal = function (size) {
        console.log(size);
        this.modalSize = size || '';
        this.isShowModal = true;
    };
    ModalDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-demo',
            template: __webpack_require__("./src/app/components/modal-demo/modal-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-demo/modal-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], ModalDemoComponent);
    return ModalDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-components/nav-components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">Nav<small class=\"font-xs text-disabled padding-left-default\"></small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <p>如本站左侧导航所示</p>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/nav-components/nav-components.component.html\">\n    </code-high-light>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>类名</th>\n                    <th>所属模块</th>\n                    <th>selector</th>\n                    <th>属性</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>NavWrapComponent</td>\n                    <td rowspan=\"4\" style=\"vertical-align: middle\">NavModule</td>\n                    <td>nav-wrap</td>\n                    <td>\n                        -\n                    </td>\n                    <td>菜单组件的外层。</td>\n                </tr>\n                <tr>\n                    <td>NavItemComponent</td>\n                    <!--   <td>NavModule</td>-->\n                    <td>nav-item</td>\n                    <td>\n                        <p>@Input() icon:string;<span class=\"text-disabled\">//图标css类</span></p>\n                        <p>@Input() text:string;<span class=\"text-disabled\">//菜单文字</span></p>\n                        <p>@Input() link:any;<span class=\"text-disabled\">//路由链接</span></p>\n                        <p>@Input('badge-class') badgeClass: string;<span class=\"text-disabled\">//数字图标css类</span></p>\n                        <p>@Input('badge-value') badgeValue: any;<span class=\"text-disabled\">//数字图标显示的内容</span></p>\n                        <p>@Input() disabled: any;<span class=\"text-disabled\">//是否禁用（禁用时置灰且链接无效）</span></p>\n                    </td>\n                    <td>一级菜单。</td>\n                </tr>\n                <tr>\n                    <td>SubNavItemComponent</td>\n                    <!--  <td>NavModule</td>-->\n                    <td>sub-nav-item</td>\n                    <td>\n                        <p>@Input() text:string;<span class=\"text-disabled\">//菜单文字</span></p>\n                        <p>@Input() link:any;<span class=\"text-disabled\">//路由链接</span></p>\n                        <p>@Input() disabled: any;<span class=\"text-disabled\">//是否禁用（禁用时置灰且链接无效）</span></p>\n                    </td>\n                    <td>二级菜单。</td>\n                </tr>\n                <tr>\n                    <td>ThirthNavItemComponent</td>\n                    <!-- <td>NavModule</td>-->\n                    <td>thirth-nav-item</td>\n                    <td>\n                        <p>@Input() text:string;<span class=\"text-disabled\">//菜单文字</span></p>\n                        <p>@Input() link:any;<span class=\"text-disabled\">//路由链接</span></p>\n                        <p>@Input() disabled: any;<span class=\"text-disabled\">//是否禁用（禁用时置灰且链接无效）</span></p>\n                    </td>\n                    <td>三级菜单。</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nav-components/nav-components.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav-components/nav-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponentsComponent = /** @class */ (function () {
    function NavComponentsComponent() {
    }
    NavComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-components',
            template: __webpack_require__("./src/app/components/nav-components/nav-components.component.html"),
            styles: [__webpack_require__("./src/app/components/nav-components/nav-components.component.less")],
        })
    ], NavComponentsComponent);
    return NavComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/paginator-demo/paginator-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">paginator\n        <small class=\"font-xs text-disabled padding-left-default\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <div class=\"\">\n        <div class=\"mar-b-def\">\n            <paginator [(index)]=\"page.index\" [count]=\"page.count\" [(pageSize)]=\"page.pageSize\" [changePageSizeAble]=\"true\" [showTotal]=\"true\" [pageSizeOptions]=\"page.pageSizeOptions\" (onChangePage)=\"onChangePage($event)\" (onChangePageError)=\"onChangePageError($event)\"></paginator>\n        </div>\n\n        <div class=\"mar-b-def\">\n            <paginator [(index)]=\"page1.index\" [count]=\"page1.count\" [(pageSize)]=\"page1.pageSize\" [changePageSizeAble]=\"true\" [showTotal]=\"true\" [pageSizeOptions]=\"page1.pageSizeOptions\" (onChangePage)=\"onChangePage($event)\" (onChangePageError)=\"onChangePageError($event)\"\n                size=\"sm\"></paginator>\n        </div>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/paginator-demo/paginator-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/paginator-demo/paginator-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n\n\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>count</td>\n                    <td>number</td>\n                    <td>\n                        总条目。\n                    </td>\n                </tr>\n                <tr>\n                    <td>pageSize</td>\n                    <td>number</td>\n                    <td>\n                        每页大小。\n                    </td>\n                </tr>\n                <tr>\n                    <td>index</td>\n                    <td>number</td>\n                    <td>\n                        当前页；初始值为0。\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>pageCount</td>\n                    <td>number</td>\n                    <td>\n                        总页数。\n                    </td>\n                </tr>\n                <tr>\n                    <td>maximum</td>\n                    <td>number</td>\n                    <td>\n                        最多显示的按钮数，默认为5。\n                    </td>\n                </tr>\n                <tr>\n                    <td>changePageSizeAble</td>\n                    <td>boolean</td>\n                    <td>\n                        是否可改变每页大小，默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>inputAble</td>\n                    <td>boolean</td>\n                    <td>\n                        是否可输入页码进行跳转，默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>pageSizeOptions</td>\n                    <td>number[]</td>\n                    <td>\n                        每页大小的选项。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        组件尺寸；除默认尺寸外可选项：sm\n                    </td>\n                </tr>\n                <tr>\n                    <td>showTotal</td>\n                    <td>boolean</td>\n                    <td>\n                        是否显示文字信息；默认为false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>\n                        添加到组件内最外层元素的css类。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>pageSizeChange</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        pageSize改变事件；触发时传入参数为pageSize。\n                    </td>\n                </tr>\n                <tr>\n                    <td>indexChange</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        index改变事件；触发时传入参数为index。\n                    </td>\n                </tr>\n                <tr>\n                    <td>onChangePage</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        页面index改变后触发的事件，触发时传入参数为index。\n                    </td>\n                </tr>\n                <tr>\n                    <td>onChangePageError</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        页面跳转失败时触发的事件，触发时传入参数为输入的页码或index。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">PaginatorModule / PaginatorComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/paginator-demo/paginator-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/paginator-demo/paginator-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorDemoComponent; });
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

var PaginatorDemoComponent = /** @class */ (function () {
    function PaginatorDemoComponent() {
        var _this = this;
        this.tabIndex = 1;
        this.page = {
            index: 0,
            count: 1000,
            pageSize: 6,
            pageSizeOptions: [10, 20, 30]
        };
        this.page1 = {
            index: 0,
            count: 1000,
            pageSize: 6,
            pageSizeOptions: [10, 20, 30]
        };
        setTimeout(function () {
            _this.page.count = 500;
        }, 2000);
    }
    PaginatorDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    PaginatorDemoComponent.prototype.onChangePage = function (ev) {
        console.log(ev);
    };
    PaginatorDemoComponent.prototype.onChangePageError = function (ev) {
        console.log(ev);
    };
    PaginatorDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paginator-demo',
            template: __webpack_require__("./src/app/components/paginator-demo/paginator-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/paginator-demo/paginator-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorDemoComponent);
    return PaginatorDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/radio-demo/radio-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">radio<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"bg-white pad-def bor-def\" name=\"form\">\n        <radio [(key)]=\"radio\" [value]=\"1\" name=\"radio\" size=\"sm\">radio={{radio}}</radio>\n        <radio [(key)]=\"radio\" [value]=\"2\" name=\"radio\">radio={{radio}}</radio>\n        <radio [(key)]=\"radio\" [value]=\"3\" name=\"radio\" customBackground=\"#ff6700\" [disabled]=\"true\" size=\"lg\">\n            radio={{radio}}\n        </radio>\n        <radio [(key)]=\"radio\" [value]=\"4\" name=\"radio\">radio={{radio}}</radio>\n        <radio [(key)]=\"radio\" [value]=\"5\" name=\"radio\">radio={{radio}}</radio>\n        <radio [(key)]=\"radio\" [value]=\"6\" name=\"radio\" styleClass=\"none\">radio={{radio}}</radio>\n    </form>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/radio-demo/radio-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>key</td>\n                    <td>any</td>\n                    <td>\n                        绑定的key值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>value</td>\n                    <td>any</td>\n                    <td>\n                        key对应的值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        组件尺寸。默认md,可选：lg、md、sm。\n                    </td>\n                </tr>\n                <tr>\n                    <td>display</td>\n                    <td>string </td>\n                    <td>\n                        显示方式。默认为行内，可选block（块级）\n                    </td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>any </td>\n                    <td>\n                        绑定在组件内input元素上disabled属性的值，当该值为真时组件将被禁用。\n                    </td>\n                </tr>\n                <tr>\n                    <td>customBackground</td>\n                    <td>string</td>\n                    <td>\n                        勾选时的背景，值为颜色值，如rgba(0,0,0,1)、#000000。\n                    </td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内最外层元素上的css类。\n                    </td>\n                </tr>\n                <tr>\n                    <td>name</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内input元素上name属性的值。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>keyChange</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        key值改变事件，触发时传入参数为key的值。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">RadioModule/RadioComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/radio-demo/radio-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/radio-demo/radio-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioDemoComponent; });
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

var RadioDemoComponent = /** @class */ (function () {
    function RadioDemoComponent() {
        this.radio = 2;
    }
    RadioDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radio-demo',
            template: __webpack_require__("./src/app/components/radio-demo/radio-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/radio-demo/radio-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], RadioDemoComponent);
    return RadioDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/searchbar-demo/searchbar-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">搜索框<small class=\"font-xs text-disabled pad-l-def\">component</small></h2>\n</div>\n<div *ngTemplateOutlet=\"greet\"></div>\n<hr>\n<h2 *ngTemplateOutlet=\"eng; context: myContext\"></h2>\n<input />\n<hr>\n<ng-container *ngTemplateOutlet=\"svk; context: myContext\"></ng-container>\n<hr>\n<ng-template #greet><span>Hello</span></ng-template>\n<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>\n<ng-template #svk let-person=\"localSk\"><span>Ahoj {{person}}!</span></ng-template>\n\n"

/***/ }),

/***/ "./src/app/components/searchbar-demo/searchbar-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchbar-demo/searchbar-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarDemoComponent; });
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

var SearchbarDemoComponent = /** @class */ (function () {
    function SearchbarDemoComponent() {
        this.myContext = { $implicit: 'World123', localSk: 'Svet' };
    }
    SearchbarDemoComponent.prototype.selectSearchItem = function (ev) {
        console.log(ev);
        this.keyword = ev;
    };
    SearchbarDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'searchbar-demo',
            template: __webpack_require__("./src/app/components/searchbar-demo/searchbar-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/searchbar-demo/searchbar-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], SearchbarDemoComponent);
    return SearchbarDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\" (click)=\"stopPropagation($event)\">\n  <!--<input class=\"form-control\" placeholder=\"输入关键字\" (focus)=\"dropDownOptions()\"\n         (keyup)=\"emitChange($event)\" value=\"{{keyword}}\" >\n  <ul class=\"search-bar-options\" *ngIf=\"dropDown&&dropDownAble\" (click)=\"hideOptions()\"\n      [style.max-height.px]=\"maxHeight\"  (scroll)=\"onScroll($event)\">\n    <li (click)=\"selectData(1)\">选项1</li>\n    <li>选项2</li>\n    <li>选项3</li>\n    <li>选项4</li>\n    <li>选项5</li>\n    <li>选项6</li>\n    <li>选项6</li>\n    <li>选项8</li>\n    <li>选项9</li>\n    <li>选项10</li>\n\n  </ul>-->\n  <div ></div>\n  <ng-content>\n\n  </ng-content>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.less":
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  position: relative;\n  z-index: 1;\n}\n.search-bar-options {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 35px;\n  background: #fff;\n  width: 100%;\n  border: 1px solid #ddd;\n  padding: 0;\n  margin: 0;\n  overflow: auto;\n}\n.search-bar-options li {\n  list-style: none;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.search-bar-options li:hover {\n  background-color: #00a6dd;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarComponent; });
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

var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
        this.maxHeight = 200;
        this.dropDownAble = true;
        this.keywordChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.choose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dropDown = false;
        this.hasOption = false;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.closeHandler = function () {
            console.log('close');
            _this.hideOptions();
        };
        document.body.addEventListener('click', this.closeHandler);
    };
    SearchbarComponent.prototype.ngOnChanges = function (changes) {
    };
    SearchbarComponent.prototype.emitChange = function (ev) {
        var target = ev.target || ev.srcElement;
        var newVal = target.value;
        console.log(ev);
        this.keywordChange.emit(newVal);
    };
    SearchbarComponent.prototype.ngOnDestroy = function () {
        document.body.removeEventListener('click', this.closeHandler);
        this.closeHandler = null;
    };
    SearchbarComponent.prototype.dropDownOptions = function () {
        this.dropDown = true;
    };
    SearchbarComponent.prototype.hideOptions = function () {
        this.dropDown = false;
    };
    SearchbarComponent.prototype.stopPropagation = function (ev) {
        ev.stopPropagation();
    };
    SearchbarComponent.prototype.selectData = function (data) {
        this.choose.emit(data);
    };
    SearchbarComponent.prototype.test = function () {
        console.log('tpl');
    };
    SearchbarComponent.prototype.onScroll = function (ev) {
        var target = ev.target || ev.srcElement;
        target.scrollLocked = true;
        var height = target.clientHeight, scrollTop = target.scrollTop, scrollHeight = target.scrollHeight;
        if (scrollTop >= scrollHeight - height) {
            target.scrollEnd = true;
            console.log('滚动到底部了');
            delete target.scrollEnd;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "maxHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "keyword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SearchbarComponent.prototype, "dropDownAble", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchbarComponent.prototype, "keywordChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchbarComponent.prototype, "choose", void 0);
    SearchbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'searchbar',
            template: __webpack_require__("./src/app/components/searchbar/searchbar.component.html"),
            styles: [__webpack_require__("./src/app/components/searchbar/searchbar.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/components/select-demo/select-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">select\n        <small class=\"font-xs text-disabled pad-l-xs\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 mar-b-sm text-primary\">示例</p>\n    <div class=\"mar-b-sm\">\n        <nx-select [options]=\"options\" [value]=\"selectValue\" valueKey=\"value\" textKey=\"label\">\n            <select class=\"form-control\" [(ngModel)]=\"selectValue\" name=\"selectValue\">\n                <option *ngFor=\"let opt of options\" [value]=\"opt.value\">{{opt.label}}</option>\n            </select>\n        </nx-select>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/select-demo/select-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/select-demo/select-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <table class=\"table table-bordered bg-white\">\n        <tbody>\n            <tr>\n                <td>\n                    <p>@Input() <span class=\"bold\">value</span>: any;<span class=\"text-disabled\">//select的值</span></p>\n                    <p>@Input() <span class=\"bold\">options</span>: any[];<span class=\"text-disabled\">//select选项的数据</span></p>\n                    <p>@Input() <span class=\"bold\">valueKey</span>: string;<span class=\"text-disabled\">//value在options元素上的key</span></p>\n                    <p>@Input() <span class=\"bold\">textKey</span>: string;<span class=\"text-disabled\">//显示文字在options元素上的key</span></p>\n                    <p>@Input() <span class=\"bold\">styleClass</span>: string;<span class=\"text-disabled\">//添加的css class</span></p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"bold text-disabled\">SelectModule/SelectComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/select-demo/select-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/select-demo/select-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDemoComponent; });
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

var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent() {
        this.selectValue = '';
        this.options = [{
                label: '请选择',
                value: '',
            }, {
                label: '小明',
                value: '1',
            }, {
                label: '小强',
                value: '2',
            }, {
                label: '大胖',
                value: '3',
            }];
        this.tabIndex = 1;
    }
    SelectDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    SelectDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-demo',
            template: __webpack_require__("./src/app/components/select-demo/select-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/select-demo/select-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/slide-down-demo/slide-down-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">slide-down\n        <small class=\"font-xs text-disabled padding-left-default\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"mar-b-sm\">\n        <div class=\"pad-b-sm\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"slidedown.toggle()\">点我</button>\n        </div>\n        <slide-down #slidedown>\n            <div style=\"background-color: #fff;border:1px solid #ddd;height: 200px;padding: 10px;\">\n                这里是可展开/隐藏的区域\n            </div>\n        </slide-down>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/slide-down-demo/slide-down-demo.component.html\">\n    </code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <table class=\"table table-bordered bg-white\">\n        <thead class=\"bg-default\">\n            <tr>\n                <th>属性名</th>\n                <th>类型</th>\n                <th>说明</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>animateTime</td>\n                <td>number</td>\n                <td>\n                    过渡动画执行时间(单位：秒)。\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <p class=\"h4 m-b-sm block text-primary\">方法</p>\n    <ul class=\"pad-def bor-def bg-white mar-b-sm\">\n        <li>\n            <p><i class=\"bold pad-r-xs\">open</i><span>展开</span></p>\n        </li>\n        <li>\n            <p><i class=\"bold pad-r-xs\">close</i><span> 收起</span></p>\n        </li>\n        <li>\n            <p><i class=\"bold pad-r-xs\">toggle</i><span> 展开/收起切换</span></p>\n        </li>\n    </ul>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">SlideDownModule/SlideDownComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/slide-down-demo/slide-down-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/slide-down-demo/slide-down-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDownDemoComponent; });
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

var SlideDownDemoComponent = /** @class */ (function () {
    function SlideDownDemoComponent() {
    }
    SlideDownDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slide-down-demo',
            template: __webpack_require__("./src/app/components/slide-down-demo/slide-down-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/slide-down-demo/slide-down-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], SlideDownDemoComponent);
    return SlideDownDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">滑块\n        <small class=\"font-xs text-disabled pad-l-xs\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 mar-b-sm text-primary\">示例</p>\n    <div class=\"mar-b-sm\">\n        <p>\n            <slider [(value)]=\"value\"></slider>\n        </p>\n        <p>\n            <slider [(value)]=\"value\" [isValueBackground]=\"false\"></slider>\n        </p>\n\n        <div style=\"width: 50%\">\n            <p>\n                <slider [(value)]=\"value1\" [min]=\"5\" [max]=\"10\" [decimal]=\"2\"></slider>\n            </p>\n        </div>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/slider-demo/slider-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <table class=\"table table-bordered bg-white\">\n        <thead class=\"bg-default\">\n            <tr>\n                <th>属性名</th>\n                <th>类型</th>\n                <th>说明</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>value</td>\n                <td>any</td>\n                <td>\n                    值。\n                </td>\n            </tr>\n            <tr>\n                <td>min</td>\n                <td>number</td>\n                <td>\n                    最小值。\n                </td>\n            </tr>\n            <tr>\n                <td>max/td>\n                    <td>number</td>\n                    <td>\n                        最大值。\n                    </td>\n            </tr>\n            <tr>\n                <td>decimal</td>\n                <td>number</td>\n                <td>\n                    小数位。\n                </td>\n            </tr>\n            <tr>\n                <td>isValueBackground</td>\n                <td>boolean</td>\n                <td>\n                    是否显示当前值背景。\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <table class=\"table table-bordered bg-white\">\n        <thead class=\"bg-default\">\n            <tr>\n                <th>属性名</th>\n                <th>类型</th>\n                <th>说明</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>valueChange</td>\n                <td>EventEmitter\n                    < any>\n                </td>\n                <td>\n                    value改变事件。\n                </td>\n            </tr>\n            <tr>\n                <td>complete</td>\n                <td>EventEmitter\n                    < any>\n                </td>\n                <td>\n                    滑动完成事件，触发时传入参数为value。\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">SliderModule/SliderComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/slider/slider-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/slider/slider-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderDemoComponent = /** @class */ (function () {
    function SliderDemoComponent() {
        this.value = 20;
        this.value1 = 6;
    }
    SliderDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slider-demo',
            template: __webpack_require__("./src/app/components/slider/slider-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/slider/slider-demo.component.less")],
        })
    ], SliderDemoComponent);
    return SliderDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner-demo/spinner-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">Spinner\n        <small class=\"font-xs text-disabled padding-left-default\">component</small>\n    </h2>\n</div>\n<div class=\"wrapper-md clearfix\">\n    <p class=\"h4 mar-b-sm text-primary\">示例</p>\n    <div class=\"bg-white pad-def mar-b-sm\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-6\">\n                默认：\n                <spinner size=\"xs\"></spinner>\n                <spinner size=\"sm\"></spinner>\n                <spinner></spinner>\n                <spinner size=\"lg\"></spinner>\n\n            </div>\n            <div style=\"background: #000\" class=\"col-md-6\">\n                <spinner size=\"xs\" [isDark]=\"true\"></spinner>\n                <spinner size=\"sm\" [isDark]=\"true\"></spinner>\n                <spinner [isDark]=\"true\"></spinner>\n                <spinner size=\"lg\" [isDark]=\"true\"></spinner>\n\n            </div>\n            <div class=\"col-md-6\">\n                sixty：\n                <spinner size=\"xs\" type=\"sixty\"></spinner>\n                <spinner size=\"sm\" type=\"sixty\"></spinner>\n                <spinner type=\"sixty\"></spinner>\n                <spinner size=\"lg\" type=\"sixty\"></spinner>\n                <spinner size=\"lg\" type=\"sixty\"></spinner>\n\n\n            </div>\n            <div style=\"background: #000\" class=\"col-md-6\">\n                <spinner size=\"xs\" type=\"sixty\" [isDark]=\"true\"></spinner>\n                <spinner size=\"sm\" type=\"sixty\" [isDark]=\"true\"></spinner>\n                <spinner type=\"sixty\" [isDark]=\"true\"></spinner>\n                <spinner size=\"lg\" type=\"sixty\" [isDark]=\"true\"></spinner>\n\n            </div>\n        </div>\n    </div>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/spinner-demo/spinner-demo.component.html\">\n    </code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>type</td>\n                    <td>string</td>\n                    <td>\n                        类型，可选three、sixty。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>number</td>\n                    <td>\n                        组件大小，可选lg、md、sm、xs，默认为md。\n                    </td>\n                </tr>\n                <tr>\n                    <td>isDark</td>\n                    <td>boolean</td>\n                    <td>\n                        是否适应深色背景，默认为false。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">LoaderModule/SpinnerComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/spinner-demo/spinner-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/spinner-demo/spinner-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerDemoComponent = /** @class */ (function () {
    function SpinnerDemoComponent() {
        this.tabIndex = 1;
    }
    SpinnerDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    SpinnerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner-demo',
            template: __webpack_require__("./src/app/components/spinner-demo/spinner-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/spinner-demo/spinner-demo.component.less")],
        })
    ], SpinnerDemoComponent);
    return SpinnerDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/switch-demo/switch-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">switch<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <form class=\"bg-white pad-def\" name=\"form\">\n        <switch [(value)]=\"switch1\" name=\"obj1\" size=\"sm\"></switch>\n        <switch [(value)]=\"switch2\" name=\"obj2\" styleClass=\"bg-warning\"></switch>\n        <switch [(value)]=\"switch3\" name=\"obj3\" size=\"lg\" styleClass=\"bg-dark\"></switch>\n        <switch [(value)]=\"switch4\" name=\"obj4\" styleClass=\"bg-danger\"></switch>\n        <switch [(value)]=\"switch5\" name=\"obj5\" styleClass=\"bg-primary\"></switch>\n        <switch [(value)]=\"switch6\" name=\"obj6\" styleClass=\"bg-success\"></switch>\n        <switch [(value)]=\"switch7\" name=\"obj7\"></switch>\n    </form>\n    <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/switch-demo/switch-demo.component.html\"></code-high-light>\n    <p class=\"h4 m-b-sm block text-primary\">@Input</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>value</td>\n                    <td>boolean</td>\n                    <td>\n                        输入值。默认false。\n                    </td>\n                </tr>\n                <tr>\n                    <td>size</td>\n                    <td>string</td>\n                    <td>\n                        组件尺寸。默认md,可选：lg、md、sm。\n                    </td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>any </td>\n                    <td>\n                        绑定在组件内input元素上disabled属性的值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>type</td>\n                    <td>string</td>\n                    <td>\n                        （背景）类型，默认为info ，可选 primary、success、danger、warning、info。\n                    </td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内最外层元素上的css类。\n                    </td>\n                </tr>\n                <tr>\n                    <td>auto</td>\n                    <td>boolean</td>\n                    <td>\n                        是否点击后切换，默认为true。\n                    </td>\n                </tr>\n                <tr>\n                    <td>name</td>\n                    <td>string</td>\n                    <td>\n                        绑定在组件内input元素上name属性的值。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h4 m-b-sm block text-primary\">@Output</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性名</th>\n                    <th>类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>valueChange</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        输入值改变事件，触发时传入参数为value的值。\n                    </td>\n                </tr>\n                <tr>\n                    <td>action</td>\n                    <td>EventEmitter\n                        < any>\n                    </td>\n                    <td>\n                        auto不为真时点击触发的动作，传入参数为value。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h6 m-b-sm block text-primary\">From:<span class=\"text-disabled\">SwitchModule/SwitchComponent</span></p>\n</div>"

/***/ }),

/***/ "./src/app/components/switch-demo/switch-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/switch-demo/switch-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchDemoComponent; });
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

var SwitchDemoComponent = /** @class */ (function () {
    function SwitchDemoComponent() {
        this.switch1 = false;
        this.switch2 = true;
        this.switch3 = true;
        this.switch4 = false;
        this.switch5 = true;
        this.switch6 = true;
        this.switch7 = false;
    }
    SwitchDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch-demo',
            template: __webpack_require__("./src/app/components/switch-demo/switch-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/switch-demo/switch-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], SwitchDemoComponent);
    return SwitchDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/toggle-demo/toggle-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">checkbox<small class=\"font-xs text-disabled mar-l-xs\">component</small></h2>\n</div>\n<div class=\"wrapper-md\">\n  <table class=\"table table-bordered bg-white\">\n    <tr>\n      <td width=\"15%\"><b>类名</b></td>\n      <td>\n        ToggleComponent\n      </td>\n    </tr>\n    <tr>\n      <td><b>所属模块</b></td>\n      <td>ToggleModule/FormsModule</td>\n    </tr>\n    <tr>\n      <td><b>类型</b></td>\n      <td>组件</td>\n    </tr>\n    <tr>\n      <td><b>selector</b></td>\n      <td>\n        toggle\n      </td>\n    </tr>\n  </table>\n  <p class=\"h4 m-b-sm block text-primary\">示例</p>\n  <form class=\"bg-white pad-def\" name=\"form\">\n    <toggle [(value)]=\"toggle1\"  name=\"obj1\" size=\"sm\" ></toggle>\n    <toggle [(value)]=\"toggle2\"  name=\"obj2\" styleClass=\"bg-warning\"></toggle>\n    <toggle [(value)]=\"toggle3\"  name=\"obj3\" size=\"lg\" styleClass=\"bg-dark\"></toggle>\n    <toggle [(value)]=\"toggle4\"  name=\"obj4\" styleClass=\"bg-danger\"></toggle>\n    <toggle [(value)]=\"toggle5\"  name=\"obj5\" styleClass=\"bg-primary\"></toggle>\n    <toggle [(value)]=\"toggle6\"  name=\"obj6\" styleClass=\"bg-success\"></toggle>\n    <toggle [(value)]=\"toggle7\"  name=\"obj7\" ></toggle>\n  </form>\n  <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/toggle-demo/toggle-demo.component.html\" ></code-high-light>\n  <p class=\"h4 m-b-sm block text-primary\">属性</p>\n  <table class=\"table table-bordered bg-white\">\n    <thead class=\"bg-default\">\n    <tr>\n      <th>属性名</th>\n      <th>类型</th>\n      <th>输入/输出类型</th>\n      <th>说明</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>value</td>\n      <td>Input</td>\n      <td>boolean</td>\n      <td>\n        输入值。默认false。\n      </td>\n    </tr>\n    <tr>\n      <td>valueChange</td>\n      <td>Output</td>\n      <td>EventEmitter< any ></td>\n      <td>\n        输入值改变事件，触发时传入参数为value的值。\n      </td>\n    </tr>\n    <tr>\n      <td>size</td>\n      <td>Input</td>\n      <td>string</td>\n      <td>\n        组件尺寸。默认md,可选：lg、md、sm。\n      </td>\n    </tr>\n    <tr>\n      <td>disabled</td>\n      <td>Input</td>\n      <td>any </td>\n      <td>\n        绑定在组件内input元素上disabled属性的值。\n      </td>\n    </tr>\n    <tr>\n      <td>type</td>\n      <td>Input</td>\n      <td>string</td>\n      <td>\n        （背景）类型，默认为info ，可选 primary、success、danger、warning、info。\n      </td>\n    </tr>\n    <tr>\n      <td>styleClass</td>\n      <td>Input</td>\n      <td>string</td>\n      <td>\n        绑定在组件内最外层元素上的css类。\n      </td>\n    </tr>\n    <tr>\n      <td>auto</td>\n      <td>Input</td>\n      <td>boolean</td>\n      <td>\n        是否点击后切换，默认为true。\n      </td>\n    </tr>\n    <tr>\n      <td>action</td>\n      <td>Output</td>\n      <td>EventEmitter< any ></td>\n      <td>\n        auto不为真时点击触发的动作，传入参数为value。\n      </td>\n    </tr>\n    <tr>\n      <td>name</td>\n      <td>Input</td>\n      <td>string</td>\n      <td>\n        绑定在组件内input元素上name属性的值。\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/toggle-demo/toggle-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/toggle-demo/toggle-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleDemoComponent; });
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

var ToggleDemoComponent = /** @class */ (function () {
    function ToggleDemoComponent() {
        this.toggle1 = false;
        this.toggle2 = true;
        this.toggle3 = true;
        this.toggle4 = false;
        this.toggle5 = true;
        this.toggle6 = true;
        this.toggle7 = false;
    }
    ToggleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toggle-demo',
            template: __webpack_require__("./src/app/components/toggle-demo/toggle-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/toggle-demo/toggle-demo.component.less")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ToggleDemoComponent);
    return ToggleDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/uploader-demo/uploader-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">文件上传控件\n        <small class=\"font-xs text-disabled padding-left-default\"></small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 m-b-sm block text-primary\">如何使用</p>\n    <section class=\"mar-b-xs bg-white pad-def\">\n        <p>1.导入 <b>UploaderModule</b>模块；</p>\n        <p>2.需要 <b>UploaderDirective、Uploader、UploadFile</b> 配合使用；</p>\n        <p>3.在input标签上使用uploader（<b>UploaderDirective</b>）指令，并初始化（配置）uploader指向的<b>Uploader</b>实例；</p>\n        <p>4.<b>Uploader</b>实例的queue属性以队列形式保存用选择的文件初始化的<b>UploadFile</b>实例。</p>\n        <p class=\"text-disabled no-b-margin\">注：暂无配套UI</p>\n    </section>\n    <p class=\"h4 m-b-sm block text-primary\">示例</p>\n    <div class=\"mar-b-xs\">\n        <a class=\"btn btn-default uploader-input\"><i class=\"fa-folder fa\"></i>选择文件\n      <input type=\"file\" multiple=\"multiple\" [uploader]=\"uploader\"/>\n    </a>\n        <a class=\"text-info mar-l-xs\" (click)=\"uploader.upload()\" *ngIf=\"!uploader.isUploading\">上传</a>\n    </div>\n    <div class=\"clearfix\">\n        <ul class=\"\">\n            <li *ngFor=\"let file of uploader.queue;let i=index\" class=\"mar-b-xs\">\n                <delete-wrap size=\"xs\" (remove)=\"removeUploadFile(i)\">\n                    <a class=\"img-wrap\" (click)=\"gallery.open($event,i)\" *ngIf=\"isImg(file)\">\n                        <img [src]=\"file.dataUrl\" />\n                    </a>\n                    <a *ngIf=\"!isImg(file)\" class=\"block\">\n            {{file.fileName}}\n          </a>\n                    <div class=\"progress no-margin\" *ngIf=\"!file.success&&!file.error\">\n                        <div class=\"progress-bar progress-bar-success\" [style.width.%]=\"file.progress\">\n                            <b>{{file.progress}}%</b>\n                        </div>\n                    </div>\n                </delete-wrap>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(1)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changTab(2)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light maxHeight=\"500px\" language=\"html\" codeSrc=\"./assets/sources/uploader-demo/uploader-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===2}\">\n                <code-high-light maxHeight=\"500px\" language=\"typescript\" codeSrc=\"./assets/sources/uploader-demo/uploader-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n    <div class=\"tab-container ng-isolate-scope\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: docIndex===0}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changeDoc(0)\">UploaderDirective</a>\n            </li>\n            <li [ngClass]=\"{active: docIndex===1}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changeDoc(1)\">UploadFile</a>\n            </li>\n            <li [ngClass]=\"{active: docIndex===2}\" class=\"ng-isolate-scope\">\n                <a (click)=\"changeDoc(2)\">Uploader</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane active\" *ngIf=\"docIndex===0\">\n                <table class=\"table table-bordered bg-white no-margin\">\n                    <tr>\n                        <td width=\"10%\" class=\"bg-default\"><b>类名</b></td>\n                        <td>\n                            UploaderDirective\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>类型</b></td>\n                        <td>指令</td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>selector</b></td>\n                        <td>\n                            uploader\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>属性</b></td>\n                        <td>\n                            <p>@Input() <b>uploader</b>: Uploader;<span class=\"text-disabled\">//Uploader实例</span></p>\n                            <p>@Input() <b>compressScale</b>: number;<span class=\"text-disabled\">//压缩尺寸</span></p>\n                            <p>@Input() <b>compressQuality</b>: number;<span class=\"text-disabled\">//压缩质量</span></p>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"tab-pane active\" *ngIf=\"docIndex===1\">\n                <table class=\"table table-bordered bg-white no-margin\">\n                    <tr>\n                        <td width=\"10%\" class=\"bg-default\"><b>类名</b></td>\n                        <td>\n                            UploadFile\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>属性</b></td>\n                        <td>\n                            <p> <b>file</b>: File;<span class=\"text-disabled\">//原始文件对象</span></p>\n                            <p><b>name</b>: string;<span class=\"text-disabled\">//上传时name</span></p>\n                            <p><b>fileName</b>: string;<span class=\"text-disabled\">//文件名</span></p>\n                            <p><b>fileExtension</b>: string;<span class=\"text-disabled\">//文件后缀名</span></p>\n                            <p><b>fileType</b>: string;<span class=\"text-disabled\">//文件类型</span></p>\n                            <p><b>fileSize</b>: number;<span class=\"text-disabled\">//文件大小，单位byte</span></p>\n                            <p><b>dataUrl</b>: string;<span class=\"text-disabled\">//文件的base64数据</span></p>\n                            <p><b>compressedDataUrl</b>: boolean;<span class=\"text-disabled\">//压缩后的文件数据</span></p>\n                            <p><b>compressed</b>: string;<span class=\"text-disabled\">//是否被压缩过</span></p>\n                            <p><b>progress</b>: number;<span class=\"text-disabled\">//上传进度（0-100）</span></p>\n                            <p><b>uploaded</b>: boolean;<span class=\"text-disabled\">//是否已上传</span></p>\n                            <p><b>success</b>: boolean;<span class=\"text-disabled\">//是否上传成功</span></p>\n                            <p><b>error</b>: boolean;<span class=\"text-disabled\">//是否上传错误</span></p>\n                            <p><b>response</b>: any;<span class=\"text-disabled\">//上传返回结果</span></p>\n                            <p><b>customData</b>: any;<span class=\"text-disabled\">//用于存储自定义数据</span></p>\n                            <p><b>xhr</b>: XMLHttpRequest;<span class=\"text-disabled\">//上传文件的XMLHttpRequest对象</span></p>\n                            <p><b>submitData</b>:&#32;&#123;&#110;&#97;&#109;&#101;&#58;&#32;&#115;&#116;&#114;&#105;&#110;&#103;&#44;&#118;&#97;&#108;&#117;&#101;&#58;&#32;&#97;&#110;&#121;&#125;&#91;&#93;;<span class=\"text-disabled\">//上传时候的数据</span></p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>方法</b></td>\n                        <td>\n                            <div>\n                                <p><i class=\"bold pad-r-xs\">setSuccess</i>设置上传成功</p>\n                                <div class=\"alert\">\n                                    <p>该方法会将success设置为true,error设置为false</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold pad-r-xs\">setError</i>设置上传失败</p>\n                                <div class=\"alert\">\n                                    <p>该方法会将success设置为false,error设置为true</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold pad-r-xs\">getFile</i><span class=\"text-disabled pad-r-xs\">(type?:number)</span>获取(要提交)的文件</p>\n                                <div class=\"alert\">\n                                    <p>type 0:Filed/Blob对象 1:Base64数据</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold pad-r-xs\">addSubmitData</i><span class=\"text-disabled pad-r-xs\" [innerHtml]=\"'(data:{name:string;value:any})'\"></span>添加每个文件上传时附带的数据</p>\n                                <div class=\"alert\">\n                                    <p>上传文件时，会将data一起提交到上传接口</p>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"tab-pane active\" *ngIf=\"docIndex===2\">\n                <table class=\"table table-bordered bg-white no-margin\">\n                    <tr>\n                        <td width=\"10%\" class=\"bg-default\"><b>类名</b></td>\n                        <td>\n                            Uploader\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>类型</b></td>\n                        <td>服务</td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>属性</b></td>\n                        <td>\n                            <p> <b>url</b>: string;<span class=\"text-disabled\">//上传地址（必须）</span></p>\n                            <p><b>headers</b>: any[];<span class=\"text-disabled\">//上传头部</span></p>\n                            <p><b>method</b>: string;<span class=\"text-disabled\">//请求方法,默认post</span></p>\n                            <p><b>uploadType</b>: number;<span class=\"text-disabled\">//上传方式 0:流式上传（默认） 1:base64上传</span></p>\n                            <p><b>queue</b>: UploadFile[];<span class=\"text-disabled\">//上传队列</span></p>\n                            <p><b>isPreview</b>: boolean;<span class=\"text-disabled\">//是否预览,默认true</span></p>\n                            <p><b>isCompress</b>: boolean;<span class=\"text-disabled\">//是否压缩,默认false</span></p>\n                            <p><b>maxSize</b>: number;<span class=\"text-disabled\">//最大文件大小（单个文件）</span></p>\n                            <p><b>maxLength</b>: number;<span class=\"text-disabled\">//最大数量</span></p>\n                            <p><b>customData</b>: any;<span class=\"text-disabled\">//用于存储自定义数据</span></p>\n                            <p><b>name</b>: string;<span class=\"text-disabled\">//上传时默认的name</span></p>\n                            <p><b>isUploading</b>: boolean;<span class=\"text-disabled\">//是否在上传</span></p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"bg-default\"><b>方法</b></td>\n                        <td>\n                            <div>\n                                <p><i class=\"bold pad-r-xs\">upload</i>传队列（queue）里的文件</p>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onSelect</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“选择文件后”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数为选择的文件files</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onQueue</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“单个文件入列”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数为一个uploadFile实例</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onQueueAll</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“全部文件入列”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数为一个队列里的UploadFile实例(UploadFile[])</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onUpload</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“上传”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数为当前Uploader实例</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onProgress</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“上传进度改变时”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数percent（百分比）,uploadFile（当前UploadFile）,uploader（当前Uploader）,index（当前文件在queue里的index）</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onSuccess</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“单个文件上传成功”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数uploadFile（当前UploadFile）,uploader（当前Uploader）,index（当前文件在queue里的index）</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onError</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“单个文件上传失败”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数uploadFile（当前UploadFile）,uploader（当前Uploader）,index（当前文件在queue里的index）</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onComplete</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“上传完成”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数uploader（当前Uploader）</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onOverSize</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“单个文件超过大小”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数fileSize（当前文件大小），maxSize（允许的最大文件大小），uploadFile（当前UploadFile实例）</p>\n                                </div>\n                            </div>\n                            <div>\n                                <p><i class=\"bold\">onOverLength</i><span class=\"text-disabled pad-r-xs\">(fn)</span>添加“超过允许的数量”的处理函数</p>\n                                <div class=\"alert\">\n                                    <p>fn方法的参数length（选择的文件数量），maxLength（允许的最大数量）</p>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<gallery #gallery [data]=\"uploader.queue\" [dataProps]=\"['dataUrl']\"></gallery>"

/***/ }),

/***/ "./src/app/components/uploader-demo/uploader-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".img-wrap {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  text-align: center;\n  position: relative;\n}\n.img-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.uploader-input {\n  display: inline-block;\n  position: relative;\n}\n.uploader-input input {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.nav-tabs li a {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/components/uploader-demo/uploader-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderDemoComponent; });
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


var UploaderDemoComponent = /** @class */ (function () {
    function UploaderDemoComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_dolphinng__["x" /* Uploader */]();
        this.tabIndex = 1;
        this.docIndex = 0;
        this.uploader.url = 'http://121.46.18.25:9080/oss/file/upload';
        this.uploader.onSelect(function (files) {
            //console.log(files);
        });
        this.uploader.onSelect(function (files) {
        });
        this.uploader.onQueue(function (uploadFile) {
            //uploadFile.addSubmitData('fileId','文件ID');  //发送此字段删除该指定ID的文件
            uploadFile.addSubmitData('businessType', '0101');
            uploadFile.addSubmitData('fileName', uploadFile.fileName);
            uploadFile.addSubmitData('fileType', uploadFile.fileExtension);
            uploadFile.addSubmitData('fileSize', uploadFile.fileSize);
            uploadFile.addSubmitData('fileContent', uploadFile.getFile());
        });
        this.uploader.onQueueAll(function (uploadFiles) {
            console.log(uploadFiles);
        });
        this.uploader.onUpload(function (uploader) {
            console.log(uploader);
        });
        this.uploader.onProgress(function (progress, uploadFile, uploader, index) {
            console.log(progress);
            console.log(uploadFile);
            console.log(uploader);
            console.log(index);
        });
        this.uploader.onSuccess(function (uploadFile, uploader, index) {
            console.log(uploadFile);
            console.log(uploader);
            console.log(index);
        });
        this.uploader.onComplete(function (uploader) {
            console.log(uploader);
        });
    }
    UploaderDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    UploaderDemoComponent.prototype.changeDoc = function (index) {
        this.docIndex = index;
    };
    UploaderDemoComponent.prototype.isImg = function (uploadFile) {
        var fileExt = uploadFile.fileExtension.replace('.', '').toLowerCase();
        return ['png', 'jpg', 'jpeg', 'gif', 'bmp'].indexOf(fileExt) >= 0;
    };
    UploaderDemoComponent.prototype.removeUploadFile = function (index) {
        this.uploader.queue.splice(index, 1);
    };
    UploaderDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'uploader-demo',
            template: __webpack_require__("./src/app/components/uploader-demo/uploader-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/uploader-demo/uploader-demo.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], UploaderDemoComponent);
    return UploaderDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map