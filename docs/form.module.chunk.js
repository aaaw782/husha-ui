webpackJsonp(["form.module"],{

/***/ "./src/app/form/elements/elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">Radio</h2>\n</div>\n<div class=\"wrapper-md\">\n    <div>\n        <div class=\"row no-margin\">\n            <div class=\"col-sm-6 pad-r-def no-l-padding no-padding-xs\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading font-bold\">Basic form</div>\n                    <div class=\"panel-body\">\n                        <form role=\"form\" class=\"ng-pristine ng-valid\">\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                            </div>\n                            <div>\n                                <div class=\"col-md-12 text-right no-padding\">\n                                    <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 no-padding\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading font-bold\">Horizontal form</div>\n                    <div class=\"panel-body\">\n                        <form class=\"bs-example form-horizontal ng-pristine ng-valid ng-submitted\">\n                            <div class=\"form-group\">\n                                <label class=\"col-lg-2 control-label\">Email</label>\n                                <div class=\"col-lg-10\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    <span class=\"help-block m-b-none\">Example block-level help text here.</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-lg-2 control-label\">Password</label>\n                                <div class=\"col-lg-10\">\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-md-12 text-right\">\n                                    <button type=\"submit\" class=\"btn btn-sm btn-info\">Sign in</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading font-bold\">\n                Inline form\n            </div>\n            <div class=\"panel-body\">\n                <form class=\"form-inline ng-pristine ng-valid\" role=\"form\">\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n                        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"checkbox m-l m-r-xs\">\n                        <label class=\"i-checks\">\n              <input type=\"checkbox\"><i></i> Remember me\n            </label>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n                    <span ng-controller=\"ModalDemoCtrl\" class=\"ng-scope\">\n          <script type=\"text/ng-template\" id=\"myModalContent.html\">\n            <div ng-include=\"'tpl/modal.form.html'\"></div>\n          </script>\n          <button class=\"btn btn-success\" ng-click=\"open('lg')\">Form in a modal</button>\n        </span>\n                </form>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading font-bold\">\n                Form elements\n            </div>\n            <div class=\"panel-body\">\n                <form class=\"form-horizontal ng-pristine ng-valid ng-valid-date ng-valid-required ng-valid-parse ng-valid-date-disabled\" method=\"get\">\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Rounded</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control rounded\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">With help</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\">\n                            <span class=\"help-block m-b-none\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" for=\"input-id-1\">Label focus</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"input-id-1\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Password</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"password\" name=\"password\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Placeholder</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"placeholder\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Disabled</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group has-success\">\n                        <label class=\"col-sm-2 control-label\">Input with success</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group has-warning\">\n                        <label class=\"col-sm-2 control-label\">Input with warning</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group has-error\">\n                        <label class=\"col-sm-2 control-label\">Input with error</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Control sizing</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control input-lg m-b\" type=\"text\" placeholder=\".input-lg\">\n                            <input class=\"form-control m-b\" type=\"text\" placeholder=\"Default input\">\n                            <input class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Column sizing</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-2\">\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-3\">\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Input groups</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"input-group m-b\">\n                                <span class=\"input-group-addon\">@</span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                            </div>\n                            <div class=\"input-group m-b\">\n                                <input type=\"text\" class=\"form-control\">\n                                <span class=\"input-group-addon\">.00</span>\n                            </div>\n                            <div class=\"input-group m-b\">\n                                <span class=\"input-group-addon\">$</span>\n                                <input type=\"text\" class=\"form-control\">\n                                <span class=\"input-group-addon\">.00</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Button addons</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"input-group m-b\">\n                                <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\">\n                                <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">With dropdowns</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"input-group m-b\">\n                                <div class=\"input-group-btn dropdown\" dropdown=\"\">\n                                    <button type=\"button\" class=\"btn btn-default\" dropdown-toggle=\"\" aria-haspopup=\"true\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a href=\"\">Action</a></li>\n                                        <li><a href=\"\">Another action</a></li>\n                                        <li><a href=\"\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"\">Separated link</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /btn-group -->\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\">\n                                <div class=\"input-group-btn dropdown\" dropdown=\"\">\n                                    <button type=\"button\" class=\"btn btn-default\" dropdown-toggle=\"\" aria-haspopup=\"true\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                                    <ul class=\"dropdown-menu pull-right\">\n                                        <li><a href=\"\">Action</a></li>\n                                        <li><a href=\"\">Another action</a></li>\n                                        <li><a href=\"\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"\">Separated link</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /btn-group -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Segmented</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"input-group m-b\">\n                                <div class=\"input-group-btn dropdown\" dropdown=\"\">\n                                    <button type=\"button\" class=\"btn btn-default\" tabindex=\"-1\">Action</button>\n                                    <button type=\"button\" class=\"btn btn-default\" dropdown-toggle=\"\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></button>\n                                    <ul class=\"dropdown-menu\">\n                                        <li><a href=\"\">Action</a></li>\n                                        <li><a href=\"\">Another action</a></li>\n                                        <li><a href=\"\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"\">Separated link</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /btn-group -->\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\">\n                                <div class=\"input-group-btn dropdown\" dropdown=\"\">\n                                    <button type=\"button\" class=\"btn btn-default\" tabindex=\"-1\">Action</button>\n                                    <button type=\"button\" class=\"btn btn-default\" dropdown-toggle=\"\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></button>\n                                    <ul class=\"dropdown-menu pull-right\">\n                                        <li><a href=\"\">Action</a></li>\n                                        <li><a href=\"\">Another action</a></li>\n                                        <li><a href=\"\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"\">Separated link</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /btn-group -->\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Button radio</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"btn-group m-r ng-scope\" ng-controller=\"ButtonsDemoCtrl\">\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid\" ng-model=\"radioModel\" btn-radio=\"'Left'\" uncheckable=\"\">Left</label>\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid active\" ng-model=\"radioModel\" btn-radio=\"'Middle'\" uncheckable=\"\">Middle</label>\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid\" ng-model=\"radioModel\" btn-radio=\"'Right'\" uncheckable=\"\">Right</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Button checkbox</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"btn-group\">\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid\" ng-model=\"checkModel.left\" btn-checkbox=\"\">Left</label>\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid\" ng-model=\"checkModel.middle\" btn-checkbox=\"\">Middle</label>\n                                <label class=\"btn btn-default ng-pristine ng-untouched ng-valid\" ng-model=\"checkModel.right\" btn-checkbox=\"\">Right</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n\n                    <div class=\"line line-dashed b-b line-lg pull-in\"></div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Spinner</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"m-b\">\n                                <div class=\"input-group bootstrap-touchspin\"><span class=\"input-group-btn\"><button class=\"btn btn-default bootstrap-touchspin-down\" type=\"button\">-</button></span><span class=\"input-group-addon bootstrap-touchspin-prefix\">$</span><input ui-jq=\"TouchSpin\" type=\"text\"\n                                        value=\"0\" class=\"form-control\" data-min=\"0\" data-max=\"10\" data-step=\"0.1\" data-decimals=\"2\" data-prefix=\"$\" style=\"display: block;\"><span class=\"input-group-addon bootstrap-touchspin-postfix\" style=\"display: none;\"></span>\n                                    <span\n                                        class=\"input-group-btn\"><button class=\"btn btn-default bootstrap-touchspin-up\" type=\"button\">+</button></span>\n                                </div>\n                            </div>\n                            <div class=\"m-b\">\n                                <div class=\"input-group bootstrap-touchspin\"><span class=\"input-group-btn\"><button class=\"btn btn-default bootstrap-touchspin-down\" type=\"button\">-</button></span><span class=\"input-group-addon bootstrap-touchspin-prefix\" style=\"display: none;\"></span><input ui-jq=\"TouchSpin\"\n                                        type=\"text\" value=\"5\" class=\"form-control\" data-min=\"0\" data-max=\"10\" data-step=\"0.1\" data-decimals=\"2\" data-postfix=\"%\" style=\"display: block;\"><span class=\"input-group-addon bootstrap-touchspin-postfix\">%</span>\n                                    <span\n                                        class=\"input-group-btn\"><button class=\"btn btn-default bootstrap-touchspin-up\" type=\"button\">+</button></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/form/elements/elements.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/elements/elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsComponent; });
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

var ElementsComponent = /** @class */ (function () {
    function ElementsComponent() {
    }
    ElementsComponent.prototype.ngOnInit = function () {
    };
    ElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'elements',
            template: __webpack_require__("./src/app/form/elements/elements.component.html"),
            styles: [__webpack_require__("./src/app/form/elements/elements.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], ElementsComponent);
    return ElementsComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">表单</h2>\n</div>\n\n"

/***/ }),

/***/ "./src/app/form/form.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-elem',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_elements_component__ = __webpack_require__("./src/app/form/elements/elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_routing__ = __webpack_require__("./src/app/form/form.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__form_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__elements_elements_component__["a" /* ElementsComponent */]
            ]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/form/form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_elements_component__ = __webpack_require__("./src/app/form/elements/elements.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__form_component__["a" /* FormComponent */]
    },
    {
        path: 'elements',
        component: __WEBPACK_IMPORTED_MODULE_2__elements_elements_component__["a" /* ElementsComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map