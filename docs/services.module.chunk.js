webpackJsonp(["services.module"],{

/***/ "./src/app/services/pop-demo/pop-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content-body fade-in-up\">\n    <div class=\"pad-def bg-default bor-b-def\">\n        <h2 class=\"no-margin\">PopService<small class=\"font-xs text-disabled pad-l-xs\">service</small> </h2>\n    </div>\n\n\n    <div class=\"pad-def\">\n        <div class=\"mar-b-sm\">\n            <p>\n                <button class=\"btn btn-info\" (click)=\"info()\">pop.info</button>\n                <button class=\"btn btn-warning\" (click)=\"confirm()\">pop.confirm</button>\n                <button class=\"btn btn-danger\" (click)=\"error()\">pop.error</button>\n                <button class=\"btn btn-default\" (click)=\"loader()\">loader</button>\n            </p>\n        </div>\n        <div class=\"tab-container\">\n            <ul class=\"nav nav-tabs \">\n                <li [ngClass]=\"{active: tabIndex===0}\">\n                    <a (click)=\"changTab(0)\">html</a>\n                </li>\n                <li [ngClass]=\"{active: tabIndex===1}\">\n                    <a (click)=\"changTab(1)\">typescript</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===0}\">\n                    <code-high-light language=\"html\" codeSrc=\"./assets/sources/services/pop-demo/pop-demo.component.html\" maxHeight=\"500px\">\n                    </code-high-light>\n                </div>\n                <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                    <code-high-light language=\"typescript\" codeSrc=\"./assets/sources/services/pop-demo/pop-demo.component.ts.code\" maxHeight=\"500px\">\n                    </code-high-light>\n                </div>\n            </div>\n        </div>\n\n        <p id=\"method\" class=\"h4  m-b-sm m-t-sm block text-primary\">方法</p>\n\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>方法名</th>\n                    <th>参数</th>\n                    <th>参数类型</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><i>info</i></td>\n                    <td>...args</td>\n                    <td>不定参数</td>\n                    <td>\n                        消息提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>error</i></td>\n                    <td>...args</td>\n                    <td>不定参数</td>\n                    <td>\n                        错误提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>confirm</i></td>\n                    <td>...args</td>\n                    <td>不定参数</td>\n                    <td>\n                        确认提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>onConfirm</i></td>\n                    <td>fn（必须）</td>\n                    <td>Function</td>\n                    <td>\n                        为弹出框添加“确认”回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopService实例。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>onCancel</i></td>\n                    <td>fn（必须）</td>\n                    <td>Function</td>\n                    <td>\n                        为弹出框添加“取消”回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopService实例。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>onClose</i></td>\n                    <td>fn（必须）</td>\n                    <td>Function</td>\n                    <td>\n                        为弹出框添加“关闭”(右上方关闭按钮点击后）回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopService实例。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>close</i></td>\n                    <td>无</td>\n                    <td>-</td>\n                    <td>\n                        关闭提示框。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <ul class=\"no-padding\">\n            <li class=\"no-li-style\">\n                <p id=\"options\" class=\"h4  m-b-sm m-t-sm block\">options说明</p>\n                <table class=\"table table-bordered bg-white\">\n                    <thead class=\"bg-default\">\n                        <tr>\n                            <th>属性名</th>\n                            <th>类型</th>\n                            <th class=\"text-center\" width=\"100px\">是否必须</th>\n                            <th>说明</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>title</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>标题文字，默认值为“提示”</td>\n                        </tr>\n                        <tr>\n                            <td>text</td>\n                            <td>string</td>\n                            <td class=\"text-center\">是</td>\n                            <td>pop弹出框正文</td>\n                        </tr>\n                        <tr>\n                            <td>confirmButtonText</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“确定”按钮文字，默认值为“确定”</td>\n                        </tr>\n                        <tr>\n                            <td>cancelButtonText</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“取消”按钮文字，默认值为“取消”</td>\n                        </tr>\n                        <tr>\n                            <td>showConfirmButton</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否显示“确定”按钮，默认为true</td>\n                        </tr>\n                        <tr>\n                            <td>showCancelButton</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否显示“取消”按钮，默认为false</td>\n                        </tr>\n                        <tr>\n                            <td>confirmButtonType</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>确定按钮类型，默认值为“info”，如值为“info”时，将会为“确定按钮”加上名为“btn-info”的class类，可选值包括“info”、“primary”、“success”、“warning”、“default”、“danger”、“dark”</td>\n                        </tr>\n                        <tr>\n                            <td>cancelButtonType</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>取消按钮类型，默认值为“default”，如值为“info”时，将会为“取消按钮”加上名为“btn-info”的class类，可选值包括“info”、“primary”、“success”、“warning”、“default”、“danger”、“dark”</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnConfirm</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否点击“确定”按钮后关闭，默认值为true</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnCancel</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否点击“取消”按钮后关闭，默认值为true</td>\n                        </tr>\n                        <tr>\n                            <td>showLoaderOnConfirm</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否在点击“确定”按钮后将按钮设为“loading”状态，默认值为false</td>\n                        </tr>\n                        <tr>\n                            <td>showLoaderOnCancel</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否在点击“取消”按钮后将按钮设为“loading”状态，默认值为false</td>\n                        </tr>\n                        <tr>\n                            <td>confirmLoaderContent</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“确定”按钮loading时按钮内容，默认使用按钮文字</td>\n                        </tr>\n                        <tr>\n                            <td>cancelLoaderContent</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“取消”按钮loading时按钮内容，默认使用按钮文字</td>\n                        </tr>\n                        <tr>\n                            <td>textAlign</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>pop正文的对齐方式，可选值“left”、“center”,默认为“left”</td>\n                        </tr>\n                        <tr>\n                            <td>iconClass</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>pop正文开始位置图标的class类，可通过此参数为弹出框添加字体图标</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/services/pop-demo/pop-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/pop-demo/pop-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopDemoComponent; });
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


var PopDemoComponent = /** @class */ (function () {
    function PopDemoComponent(pop) {
        this.pop = pop;
        this.tabIndex = 0;
    }
    PopDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    PopDemoComponent.prototype.info = function () {
        console.log('info');
        this.pop.info({
            title: '系统提示',
            text: '这是一个消息提示！',
            textAlign: 'center'
        });
    };
    PopDemoComponent.prototype.confirm = function () {
        this.pop.confirm({
            title: '操作确认',
            text: '确定要这么做吗？'
        }).onConfirm(function () {
            alert('你选择了确定按钮');
        }).onCancel(function () {
            alert('你选择了取消按钮');
        }).onClose(function () {
            alert('你选择了关闭');
        });
    };
    PopDemoComponent.prototype.error = function () {
        this.pop.error({
            title: '错误提示',
            text: '对象未定义'
        });
    };
    PopDemoComponent.prototype.loader = function () {
        this.pop.confirm({
            title: '操作确认',
            text: '确定要这么做吗？',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            confirmLoaderText: '正在提交'
        });
    };
    PopDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pop-demo',
            template: __webpack_require__("./src/app/services/pop-demo/pop-demo.component.html"),
            styles: [__webpack_require__("./src/app/services/pop-demo/pop-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["o" /* PopService */]])
    ], PopDemoComponent);
    return PopDemoComponent;
}());



/***/ }),

/***/ "./src/app/services/popup-demo/popup-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content-body fade-in-up\">\n    <div class=\"pad-def bg-default bor-b-def\">\n        <h2 class=\"no-margin\">PopupService<small class=\"font-xs text-disabled pad-l-xs\">service</small> </h2>\n    </div>\n\n\n    <div class=\"pad-def\">\n        <div class=\"mar-b-sm\">\n            <p>\n                <button class=\"btn btn-info\" (click)=\"info()\">popup.info</button>\n                <button class=\"btn btn-warning\" (click)=\"confirm()\">popup.confirm</button>\n                <button class=\"btn btn-danger\" (click)=\"error()\">popup.error</button>\n                <button class=\"btn btn-default\" (click)=\"loader()\">loader</button>\n            </p>\n        </div>\n        <div class=\"tab-container\">\n            <ul class=\"nav nav-tabs \">\n                <li [ngClass]=\"{active: tabIndex===0}\">\n                    <a (click)=\"changTab(0)\">html</a>\n                </li>\n                <li [ngClass]=\"{active: tabIndex===1}\">\n                    <a (click)=\"changTab(1)\">typescript</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===0}\">\n                    <code-high-light language=\"html\" codeSrc=\"./assets/sources/services/popup-demo/popup-demo.component.html\" maxHeight=\"500px\">\n                    </code-high-light>\n                </div>\n                <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                    <code-high-light language=\"typescript\" codeSrc=\"./assets/sources/services/popup-demo/popup-demo.component.ts.code\" maxHeight=\"500px\">\n                    </code-high-light>\n                </div>\n            </div>\n        </div>\n\n        <p id=\"method\" class=\"h4  m-b-sm m-t-sm block text-primary\">方法</p>\n        <ul class=\"pad-def bg-white bor-def mar-b-sm\">\n            <li>\n                <p><i class=\"bold\">info</i><span class=\"text-disabled\">(...args)</span> 消息提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">error</i><span class=\"text-disabled\">(...args)</span> 错误提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">confirm</i><span class=\"text-disabled\">(...args)</span> 确认提示。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title，第一个json对象参数作为<a class=\"text-info\">options</a>参数。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">onConfirm</i><span class=\"text-disabled\">(fn:Function)</span> 为弹出框添加“确认”回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopupService实例。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">onCancel</i><span class=\"text-disabled\">(fn:Function)</span> 为弹出框添加“确认”回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopService实例。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">onClose</i><span class=\"text-disabled\">(fn:Function)</span> 为弹出框添加“关闭”回调，当传入的参数为非箭头函数时，该函数上下文（this）指向该PopService实例。</p>\n            </li>\n            <li>\n                <p><i class=\"bold\">close</i> 关闭提示框。</p>\n            </li>\n        </ul>\n        <p id=\"options\" class=\"h4 text-primary m-b-sm m-t-sm block\">options说明</p>\n        <ul class=\"no-padding over-auto\">\n            <li class=\"no-li-style\">\n                <table class=\"table table-bordered bg-white\">\n                    <thead class=\"bg-default\">\n                        <tr>\n                            <th>属性名</th>\n                            <th>类型</th>\n                            <th class=\"text-center\" width=\"100px\">是否必须</th>\n                            <th>说明</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>title</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>标题文字，默认值为“提示”</td>\n                        </tr>\n                        <tr>\n                            <td>text</td>\n                            <td>string</td>\n                            <td class=\"text-center\">是</td>\n                            <td>pop弹出框正文</td>\n                        </tr>\n                        <tr>\n                            <td>confirmButtonText</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“确定”按钮文字，默认值为“确定”</td>\n                        </tr>\n                        <tr>\n                            <td>cancelButtonText</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“取消”按钮文字，默认值为“取消”</td>\n                        </tr>\n                        <tr>\n                            <td>showConfirmButton</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否显示“确定”按钮，默认为true</td>\n                        </tr>\n                        <tr>\n                            <td>showCancelButton</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否显示“取消”按钮，默认为false</td>\n                        </tr>\n                        <tr>\n                            <td>confirmButtonType</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>确定按钮类型，默认值为“info”，如值为“info”时，将会为“确定按钮”加上名为“btn-info”的class类，可选值包括“info”、“primary”、“success”、“warning”、“default”、“danger”、“dark”</td>\n                        </tr>\n                        <tr>\n                            <td>cancelButtonType</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>取消按钮类型，默认值为“default”，如值为“info”时，将会为“取消按钮”加上名为“btn-info”的class类，可选值包括“info”、“primary”、“success”、“warning”、“default”、“danger”、“dark”</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnConfirm</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否点击“确定”按钮后关闭，默认值为true</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnCancel</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否点击“取消”按钮后关闭，默认值为true</td>\n                        </tr>\n                        <tr>\n                            <td>showLoaderOnConfirm</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否在点击“确定”按钮后将按钮设为“loading”状态，默认值为false</td>\n                        </tr>\n                        <tr>\n                            <td>showLoaderOnCancel</td>\n                            <td>boolean</td>\n                            <td class=\"text-center\">否</td>\n                            <td>是否在点击“取消”按钮后将按钮设为“loading”状态，默认值为false</td>\n                        </tr>\n                        <tr>\n                            <td>confirmLoaderContent</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“确定”按钮loading时按钮内容，默认使用按钮文字</td>\n                        </tr>\n                        <tr>\n                            <td>cancelLoaderContent</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>“取消”按钮loading时按钮内容，默认使用按钮文字</td>\n                        </tr>\n                        <tr>\n                            <td>textAlign</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>pop正文的对齐方式，可选值“left”、“center”,默认为“left”</td>\n                        </tr>\n                        <tr>\n                            <td>iconClass</td>\n                            <td>string</td>\n                            <td class=\"text-center\">否</td>\n                            <td>pop正文开始位置图标的class类，可通过此参数为弹出框添加字体图标</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </li>\n        </ul>\n        <p class=\"h5 text-disabled m-b-sm m-t-sm block\">注：与原<a class=\"text-info\" routerLink=\"/services/pop\">Popservice</a>（仍保留）使用完全一样，只是改了个名字</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/services/popup-demo/popup-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/popup-demo/popup-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupDemoComponent; });
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


var PopupDemoComponent = /** @class */ (function () {
    function PopupDemoComponent(popup) {
        this.popup = popup;
        this.tabIndex = 0;
    }
    PopupDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    PopupDemoComponent.prototype.info = function () {
        this.popup.info({
            title: '系统提示',
            text: '这是一个消息提示！',
            textAlign: 'center'
        });
    };
    PopupDemoComponent.prototype.confirm = function () {
        this.popup.confirm({
            title: '操作确认',
            text: '确定要这么做吗？'
        }).onConfirm(function () {
            alert('你选择了确定按钮');
        }).onCancel(function () {
            alert('你选择了取消按钮');
        }).onClose(function () {
            alert('你选择了关闭');
        });
    };
    PopupDemoComponent.prototype.error = function () {
        this.popup.error({
            title: '错误提示',
            text: '对象未定义'
        });
    };
    PopupDemoComponent.prototype.loader = function () {
        this.popup.confirm({
            title: '操作确认',
            text: '确定要这么做吗？',
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            confirmLoaderText: '正在提交'
        });
    };
    PopupDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-demo',
            template: __webpack_require__("./src/app/services/popup-demo/popup-demo.component.html"),
            styles: [__webpack_require__("./src/app/services/popup-demo/popup-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["p" /* PopupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["p" /* PopupService */]])
    ], PopupDemoComponent);
    return PopupDemoComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">Feedback</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_demo_pop_demo_component__ = __webpack_require__("./src/app/services/pop-demo/pop-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_demo_popup_demo_component__ = __webpack_require__("./src/app/services/popup-demo/popup-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_demo_toaster_demo_component__ = __webpack_require__("./src/app/services/toaster-demo/toaster-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracert_demo_tracert_demo_component__ = __webpack_require__("./src/app/services/tracert-demo/tracert-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_routing__ = __webpack_require__("./src/app/services/services.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__services_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pop_demo_pop_demo_component__["a" /* PopDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_3__popup_demo_popup_demo_component__["a" /* PopupDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__toaster_demo_toaster_demo_component__["a" /* ToasterDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tracert_demo_tracert_demo_component__["a" /* TracertDemoComponent */],
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/services.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_demo_pop_demo_component__ = __webpack_require__("./src/app/services/pop-demo/pop-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_demo_popup_demo_component__ = __webpack_require__("./src/app/services/popup-demo/popup-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_demo_toaster_demo_component__ = __webpack_require__("./src/app/services/toaster-demo/toaster-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracert_demo_tracert_demo_component__ = __webpack_require__("./src/app/services/tracert-demo/tracert-demo.component.ts");






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'pop',
        component: __WEBPACK_IMPORTED_MODULE_2__pop_demo_pop_demo_component__["a" /* PopDemoComponent */]
    },
    {
        path: 'popup',
        component: __WEBPACK_IMPORTED_MODULE_3__popup_demo_popup_demo_component__["a" /* PopupDemoComponent */]
    },
    {
        path: 'toaster',
        component: __WEBPACK_IMPORTED_MODULE_4__toaster_demo_toaster_demo_component__["a" /* ToasterDemoComponent */]
    },
    {
        path: 'tracert',
        component: __WEBPACK_IMPORTED_MODULE_5__tracert_demo_tracert_demo_component__["a" /* TracertDemoComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/services/toaster-demo/toaster-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">Toaster\n        <small class=\"font-xs text-disabled pad-l-xs\">service</small>\n    </h2>\n</div>\n<div class=\"wrapper-md\">\n    <div class=\"row bg-default bor-b-def mar-b-sm pad-b-def\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n                <label>Title</label>\n                <input type=\"text\" class=\"form-control ng-pristine ng-untouched ng-valid\" placeholder=\"输入标题\" [(ngModel)]=\"toastOptions.title\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>Message</label>\n                <textarea class=\"form-control ng-pristine ng-untouched ng-valid\" placeholder=\"输入消息内容\" rows=\"5\" [(ngModel)]=\"toastOptions.message\"></textarea>\n            </div>\n            <button class=\"btn btn-{{toastOptions.type==='error'?'danger':\n                             toastOptions.type==='wait'?'info':toastOptions.type}}\" (click)=\"popToaster()\">点我试试\n      </button>\n        </div>\n        <div class=\"col-sm-6\">\n            <label>Type</label>\n\n            <div class=\"radio\">\n                <label class=\"i-checks\" (click)=\"changeToasterType('success')\">\n          <input type=\"radio\" name=\"toaster\" value=\"success\" [checked]=\"toastOptions.type==='success'\">\n          <i></i>\n          Success\n        </label>\n            </div>\n            <div class=\"radio\">\n                <label class=\"i-checks\" (click)=\"changeToasterType('info')\">\n          <input type=\"radio\" name=\"toaster\" value=\"info\" [checked]=\"toastOptions.type==='info'\">\n          <i></i>\n          Info\n        </label>\n            </div>\n            <div class=\"radio\">\n                <label class=\"i-checks\" (click)=\"changeToasterType('wait')\">\n          <input type=\"radio\" name=\"toaster\" value=\"wait\" [checked]=\"toastOptions.type==='wait'\">\n          <i></i>\n          Wait\n        </label>\n            </div>\n            <div class=\"radio\">\n                <label class=\"i-checks\" (click)=\"changeToasterType('warning')\">\n          <input type=\"radio\" name=\"toaster\" value=\"warning\" [checked]=\"toastOptions.type==='warning'\">\n          <i></i>\n          Warning\n        </label>\n            </div>\n            <div class=\"radio\">\n                <label class=\"i-checks\" (click)=\"changeToasterType('error')\">\n          <input type=\"radio\" name=\"toaster\" value=\"error\" [checked]=\"toastOptions.type==='error'\">\n          <i></i>\n          Error\n        </label>\n            </div>\n        </div>\n    </div>\n    <div class=\"tab-container\">\n        <ul class=\"nav nav-tabs \">\n            <li [ngClass]=\"{active: tabIndex===0}\">\n                <a (click)=\"changTab(0)\">html</a>\n            </li>\n            <li [ngClass]=\"{active: tabIndex===1}\">\n                <a (click)=\"changTab(1)\">typescript</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane \" [ngClass]=\"{active: tabIndex===0}\">\n                <code-high-light language=\"html\" maxHeight=\"500px\" codeSrc=\"./assets/sources/services/toaster-demo/toaster-demo.component.html\">\n                </code-high-light>\n            </div>\n            <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n                <code-high-light language=\"typescript\" maxHeight=\"500px\" codeSrc=\"./assets/sources/services/toaster-demo/toaster-demo.component.ts.code\">\n                </code-high-light>\n            </div>\n        </div>\n    </div>\n    <p class=\"h4  m-b-sm m-t-sm block text-primary\">方法</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>方法名</th>\n                    <th>参数</th>\n                    <th width=\"100px\">参数类型</th>\n                    <th width=\"200px\">说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><i>pop</i></td>\n                    <td>options</td>\n                    <td>json对象</td>\n                    <td>\n                        默认弹出消息，详细说明见下方。\n                    </td>\n                </tr>\n                <tr>\n                    <td><i>info、success、wait、warning、error</i></td>\n                    <td>...args</td>\n                    <td>不定参数</td>\n                    <td width=\"200px\">\n                        显示5种状态（默认消息，成功提示，等待，警告，错误）的提示消息。第一个字符串参数作为消息文字text，第二个字符串参数作为消息标题title。\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <p class=\"h5  m-b-sm m-t-sm block text-primary\" id=\"options\">options参数说明</p>\n    <div class=\"over-auto\">\n        <table class=\"table table-bordered table-responsive bg-white\">\n            <thead class=\"bg-default\">\n                <tr>\n                    <th>属性值</th>\n                    <th>类型</th>\n                    <th class=\"text-center\">是否必须</th>\n                    <th>说明</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>type</td>\n                    <td>string</td>\n                    <td class=\"text-center\">否</td>\n                    <td>弹出框的类型，默认为info,可选值：info、success、wait、warning、error</td>\n                </tr>\n                <tr>\n                    <td>title</td>\n                    <td>string</td>\n                    <td class=\"text-center\">否</td>\n                    <td>消息框的标题</td>\n                </tr>\n                <tr>\n                    <td>message</td>\n                    <td>string</td>\n                    <td class=\"text-center\">是</td>\n                    <td>消息框的正文</td>\n                </tr>\n                <tr>\n                    <td>animated</td>\n                    <td>boolean</td>\n                    <td class=\"text-center\">否</td>\n                    <td>是否使用动画，默认为true</td>\n                </tr>\n                <tr>\n                    <td>delay</td>\n                    <td>number</td>\n                    <td class=\"text-center\">否</td>\n                    <td>消息框持续时间，单位为毫秒，默认值5000，即5秒</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"pad-def\">\n</div>"

/***/ }),

/***/ "./src/app/services/toaster-demo/toaster-demo.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/toaster-demo/toaster-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterDemoComponent; });
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


var ToasterDemoComponent = /** @class */ (function () {
    function ToasterDemoComponent(toaster) {
        this.toaster = toaster;
        this.tabIndex = 0;
        this.toastOptions = {
            type: 'success',
            title: 'Title',
            message: 'Message'
        };
    }
    ToasterDemoComponent.prototype.changTab = function (index) {
        this.tabIndex = index;
    };
    ToasterDemoComponent.prototype.popToaster = function () {
        this.toaster.pop(this.toastOptions);
    };
    ToasterDemoComponent.prototype.changeToasterType = function (type) {
        this.toastOptions.type = type;
        console.log('radio');
    };
    ToasterDemoComponent.prototype.popDemo = function () {
        this.toaster.pop({
            type: 'success',
            title: '标题',
            message: '操作成功！',
            animated: true,
            delay: 3000
        });
    };
    ToasterDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toaster-demo',
            template: __webpack_require__("./src/app/services/toaster-demo/toaster-demo.component.html"),
            styles: [__webpack_require__("./src/app/services/toaster-demo/toaster-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["v" /* Toaster */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["v" /* Toaster */]])
    ], ToasterDemoComponent);
    return ToasterDemoComponent;
}());



/***/ }),

/***/ "./src/app/services/tracert-demo/tracert-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content-body fade-in-up\">\n    <div class=\"pad-def bg-default bor-b-def\">\n        <h2 class=\"no-margin\">TracertService<small class=\"font-xs text-disabled pad-l-xs\">service</small> </h2>\n    </div>\n\n\n    <div class=\"pad-def\">\n        <div class=\"mar-b-sm\">\n            <p class=\"alert alert-info\">\n                <span class=\"bold text-primary\">TracertService</span>是可注入的服务，用于订阅路由变化和（使用新参数）生成新的路由记录。主要用于记录当前页面状态，使在跳转到新页面再返回时能够重现跳转前的页面。\n            </p>\n            <ul class=\"group\">\n                <p class=\"text-primary\"> 通过两个方法用于实现这样的功能：</p>\n                <li>\n                    <p>\n                        1.<span class=\"bold\">subscribe</span><span class=\"text-disabled\"> (searchParams: Object;action?: Function)</span>\n                    </p>\n                    <div class=\"fn-desc mar-b-sm\">\n                        调用此方法将订阅路由变化。当路由发生变化时，会将路由中“;”后的参数的值赋值给传入的searchParams对象的对应字段，然后立即执行action方法（如果传入action参数）。\n                    </div>\n                    <p>\n                        2.<span class=\"bold\">navigate</span><span class=\"text-disabled\"></span>\n                    </p>\n                    <div class=\"fn-desc\">\n                        调用此方法时如果subscribe传入的searchParams参数有字段值发生改变，将生成新的路由记录(“;”后参数的改变)。\n                    </div>\n                </li>\n            </ul>\n            <div class=\"group\">\n                <p class=\"text-primary\">原理</p>\n                <p>1.subscribe订阅路由变化；</p>\n                <p>2.当路由变化时，将“;”后参数的值取出并更新到searchParams对应的字段；</p>\n                <p>3.使用navigate方法将searchParams里各字段的值拼接成路由“;”后的参数，并生成新的路由记录。</p>\n                <p>4.页面返回时，返回的是最后一次调用navigate方法产生的路由记录，同时路由变化的事件触发（如2所述），此时就可以通过searchParams各个字段的值来初始化和控制页面的显示。</p>\n            </div>\n            <div class=\"group\">\n                <p class=\"text-primary\">如何使用</p>\n                <p>1.在需要记录的组件下注入单独的实例（TracertService实例在创建改组件时提供）；</p>\n                <p>2.先调用subscribe方法，其中searchParams参数必须为一个对象；然后在需要记录页面状态的地方调用navigate方法；</p>\n                <p>3.注意navigate会触发路由的变化，因此需要在适当的时机调用。</p>\n            </div>\n        </div>\n    </div>\n</div>。"

/***/ }),

/***/ "./src/app/services/tracert-demo/tracert-demo.component.less":
/***/ (function(module, exports) {

module.exports = ".fn-desc {\n  padding-left: 2em;\n}\n.group {\n  background-color: #fff;\n  padding: 20px;\n  border-bottom: none;\n  border-color: #ddd;\n}\n.group:last-child {\n  border-bottom: 1px solid #ddd;\n}\n"

/***/ }),

/***/ "./src/app/services/tracert-demo/tracert-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracertDemoComponent; });
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


var TracertDemoComponent = /** @class */ (function () {
    function TracertDemoComponent(tracertSvc) {
        this.tracertSvc = tracertSvc;
    }
    TracertDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tracert-demo',
            template: __webpack_require__("./src/app/services/tracert-demo/tracert-demo.component.html"),
            styles: [__webpack_require__("./src/app/services/tracert-demo/tracert-demo.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["w" /* TracertService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_dolphinng__["w" /* TracertService */]])
    ], TracertDemoComponent);
    return TracertDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map