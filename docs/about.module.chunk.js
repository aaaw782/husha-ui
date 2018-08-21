webpackJsonp(["about.module"],{

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">说明</h2>\n</div>\n<div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explanation_explanation_component__ = __webpack_require__("./src/app/about/explanation/explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__convention_convention_component__ = __webpack_require__("./src/app/about/convention/convention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_build_component__ = __webpack_require__("./src/app/about/build/build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_routing__ = __webpack_require__("./src/app/about/about.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__about_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]],
            providers: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_2__explanation_explanation_component__["a" /* ExplanationComponent */], __WEBPACK_IMPORTED_MODULE_3__convention_convention_component__["a" /* ConventionComponent */], __WEBPACK_IMPORTED_MODULE_4__build_build_component__["a" /* BuildComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/about.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explanation_explanation_component__ = __webpack_require__("./src/app/about/explanation/explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__convention_convention_component__ = __webpack_require__("./src/app/about/convention/convention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_build_component__ = __webpack_require__("./src/app/about/build/build.component.ts");





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */]
    },
    {
        path: 'explanation',
        component: __WEBPACK_IMPORTED_MODULE_2__explanation_explanation_component__["a" /* ExplanationComponent */]
    },
    {
        path: 'convention',
        component: __WEBPACK_IMPORTED_MODULE_3__convention_convention_component__["a" /* ConventionComponent */]
    },
    {
        path: 'build',
        component: __WEBPACK_IMPORTED_MODULE_4__build_build_component__["a" /* BuildComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/about/build/build.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">项目构建说明</h2>\n</div>\n<div class=\"wrapper-md\">\n    <p class=\"h4 mar-b-sm block text-primary\">开发环境</p>\n    <ul class=\"pad-l-def\">\n        <li class=\"mar-b-xs\">\n            <b>1.本项目通过angular/cli  构建；</b>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>2.angular/cli依赖node.js环境；</b>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b>3.完整项目的开发需要在全局安装node.js、angular/cli；</b>\n        </li>\n        <li class=\"mar-b-xs\">\n            <b> 4.vscode、webstorm、sublime Text等，根据个人习惯选择。</b>\n        </li>\n    </ul>\n    <p class=\"mar-b-def pad-l-def\">\n        <b>angular、angular/cli的使用参阅</b>\n        <a class=\"text-info\" href=\"https://angular.cn\" target=\"_blank\">https://angular.cn/</a>\n    </p>\n    <p class=\"h4 mar-b-sm block text-primary\">打包部署可能会遇到的问题</p>\n    <ul class=\"pad-l-def\">\n        <li>\n            <p><b>1.刷新导致页面404错误</b></p>\n            <div>\n                <p>原因：地址栏url是前端路由的地址，而后台服务（前端server）没有配置相应的路由。</p>\n                <p>解决方法：后台服务配置一条路由：在接收到路由请求时返回index.html文件，这样就可以将路由交给前端js处理。</p>\n            </div>\n        </li>\n        <li>\n            <p><b>2.ajax请求跨域</b></p>\n            <div>\n                <p>原因：浏览器同源策略，接口项目和网站项目部署在不同域名/端口时，它们属于不同的“域”。</p>\n                <p>解决方法1：使用浏览器的CORS(跨域资源共享，ie10+及主流浏览器支持)，api服务设置相应的CORS响应头；</p>\n                <p>解决方法2：使用代理。即绕过浏览器的同源策略的限制，将请求发送到同域的服务，再由该服务将请求转发到真正的接口服务，并将结果返回。（可使用nginx反向代理快速实现）。</p>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/about/build/build.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/build/build.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildComponent; });
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

var BuildComponent = /** @class */ (function () {
    function BuildComponent() {
        this.tabIndex = 1; //1:css相关 2:js相关 3：angular相关
    }
    BuildComponent.prototype.changTab = function (tabIndex) {
        this.tabIndex = tabIndex;
    };
    BuildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about-build',
            template: __webpack_require__("./src/app/about/build/build.component.html"),
            styles: [__webpack_require__("./src/app/about/build/build.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], BuildComponent);
    return BuildComponent;
}());



/***/ }),

/***/ "./src/app/about/convention/convention.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n  <h2 class=\"no-margin\">约定</h2>\n</div>\n<div class=\"wrapper-md\">\n\n\n<div class=\"tab-container ng-isolate-scope\">\n  <ul class=\"nav nav-tabs \">\n    <li [ngClass]=\"{active: tabIndex===1}\" class=\"ng-isolate-scope\">\n      <a  (click)=\"changTab(1)\">CSS相关</a>\n    </li>\n    <li [ngClass]=\"{active: tabIndex===2}\" class=\"ng-isolate-scope\">\n      <a  (click)=\"changTab(2)\">JS/TS相关</a>\n    </li>\n    <li [ngClass]=\"{active: tabIndex===3}\" class=\"ng-isolate-scope\">\n      <a  (click)=\"changTab(3)\">angular相关</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane\" [ngClass]=\"{active: tabIndex===1}\">\n\n\n    <ul class=\"list-group no-borders pull-in m-b-none\">\n      <li class=\"list-group-item\">\n        <a class=\"h4 text-primary m-b-sm m-t-sm block\">CSS命名 </a>\n        <p>1.css类名以中横线连接 如 col-xs-12，id名以下划线连接，如form_login；</p>\n        <p>2.控制特殊区域的样式的类名请加上前缀，如banner-。</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm m-t-sm block\">关于嵌套</a>\n        <p>1.过多的嵌套不仅影响渲染的速度（虽然几乎可以忽略），而且还会使css代码维护的难度增加；</p>\n        <p>2.因此应尽量避免过多的嵌套，如添加一个特殊的css类。</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm m-t-sm block\">关于ID</a>\n        <p>1.在非万不得已的情况下，最好不要在css样式表中使用id选择器；</p>\n        <p>2.id一般提供js使用。</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm m-t-sm block\">命名参考</a>\n        <div>\n\n          <p class=\"font-bold\">(1)页面结构</p>\n          <p>容器: container</p>\n          <p>页头：header</p>\n          <p>内容：content/container</p>\n          <p>页面主体：main</p>\n          <p>页尾：footer</p>\n          <p>导航：nav</p>\n          <p>侧栏：sidebar</p>\n          <p>栏目：column</p>\n          <p>页面外围控制整体佈局宽度：wrapper</p>\n          <p>左右中：left right center</p>\n          <p class=\"font-bold\">(2)导航</p>\n          <p>导航：nav</p>\n          <p>主导航：mainnav</p>\n          <p>子导航：subnav</p>\n          <p>顶导航：topnav</p>\n          <p>边导航：sidebar</p>\n          <p> 左导航：leftsidebar</p>\n          <p>右导航：rightsidebar</p>\n          <p>菜单：menu</p>\n          <p>子菜单：submenu</p>\n          <p>标题: title</p>\n          <p>摘要: summary</p>\n          <p class=\"font-bold\"> (3)功能</p>\n          <p> 标志：logo</p>\n          <p>广告：banner</p>\n          <p>登陆：login</p>\n          <p>登录条：loginbar</p>\n          <p> 注册：register</p>\n          <p> 搜索：search</p>\n          <p>功能区：shop</p>\n          <p> 标题：title</p>\n          <p>加入：joinus</p>\n          <p>状态：status</p>\n          <p>按钮：btn</p>\n          <p>滚动：scroll</p>\n          <p>标籤页：tab</p>\n          <p>文章列表：list</p>\n          <p>提示信息：msg</p>\n          <p>当前的: current</p>\n          <p> 小技巧：tips</p>\n          <p>图标: icon</p>\n          <p>注释：note</p>\n          <p>指南：guild</p>\n          <p>服务：service</p>\n          <p>热点：hot</p>\n          <p>新闻：news</p>\n          <p>下载：download</p>\n          <p>投票：vote</p>\n          <p>合作伙伴：partner</p>\n          <p>友情链接：link</p>\n\n\n\n\n\n\n        </div>\n      </li>\n    </ul>\n  </div>\n    <div class=\"tab-pane \"  [ngClass]=\"{active: tabIndex===2}\" >\n    <ul class=\"list-group list-group-alt list-group-lg no-borders pull-in m-b-none ng-scope\">\n      <li class=\"list-group-item\">\n        <a class=\"h4 text-primary m-b-sm m-t-sm block\">JS/TS命名 </a>\n        <p>1.\t常量名/变量名/函数名/类名/接口名应各自使用一种命名规则，如“驼峰式”、Pascal命名法（“大驼峰式”）等，请勿混用；</p>\n        <p>2.类名/接口名首字母大写；</p>\n        <p>3.常量名单词间以下划线连接。</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm m-t-sm block\">关于全局变量</a>\n        <p>1.js中，除非你能够很好的管理该全局变量，否则请避免声明它；</p>\n        <p>2.ts使用模块加载的方式组织代码，文件里变量的作用域仅限于ts文件中，因此不存在真正的全局变量。可以通过实现单例类或angular单例服务供全局使用</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm m-t-sm block\">其他</a>\n        <p>1.如果你的js文件需要压缩，请不要漏掉代码中的分号；</p>\n        <p>2.如果你的js文件需要合并，在“严格模式”（文件首行或函数首行声明了\"use strict\";）与“普通模式”混用的情况下应处理好他们之间代码的隔离，或者合并的文件使用同一种模式。否则将可能引起一些难以理解的bug。</p>\n      </li>\n    </ul>\n  </div>\n    <div class=\"tab-pane \"  [ngClass]=\"{active: tabIndex===3}\">\n\n    <ul class=\"list-group list-group-lg no-borders pull-in m-b-none ng-scope\">\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm block\">目录结构建议</a>\n        <p>1.源码放在同一个文件夹（如src文件夹），打包发布的文件放在另一文件夹（如dist）；</p>\n        <p>2.以业务划分模块，以模块组织目录；</p>\n        <p>3.子模块放在父模块目录下；</p>\n        <p>4.模块文件夹下包含相关的ts文件、css/less/sass/文件、html。</p>\n        <p>5.外部资源放在同一个文件夹（如assets文件夹）；</p>\n        <p>6.通用组件、指令、服务、工具类/接口以类型划分目录。</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm block\">文件命名</a>\n        <p>1.文件名应概括文件内容，并包含文件标识（component、directive、service等），如一个header组件文件的名称为header.component.ts；</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"h4 text-primary m-b-sm block\">通用模块</a>\n        <p>1.angular不允许同一组件在不同模块中声明，因此应将需要在不同模块中使用的组件“包裹”在一个通用模块中，然后将这一通用模块导入到需要的模块之中；</p>\n      </li>\n      <li class=\"list-group-item\">\n        <a  class=\"h4 text-primary m-b-sm block\">其他</a>\n        <p>1.不要在业务组件/服务中操作dom,dom的操作应放在非业务组件/服务中</p>\n        <p>\n          2.最佳实践请参阅<a class=\"mar-l-xs text-info txt-underline\" href=\"https://angular.cn/guide/styleguide\" target=\"_blank\">https://angular.cn/guide/styleguide</a>\n        </p>\n      </li>\n    </ul>\n  </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/convention/convention.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/convention/convention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConventionComponent; });
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

var ConventionComponent = /** @class */ (function () {
    function ConventionComponent() {
        this.tabIndex = 1; //1:css相关 2:js相关 3：angular相关
    }
    ConventionComponent.prototype.changTab = function (tabIndex) {
        this.tabIndex = tabIndex;
    };
    ConventionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'convention',
            template: __webpack_require__("./src/app/about/convention/convention.component.html"),
            styles: [__webpack_require__("./src/app/about/convention/convention.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], ConventionComponent);
    return ConventionComponent;
}());



/***/ }),

/***/ "./src/app/about/explanation/explanation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-def bg-default bor-b-def\">\n    <h2 class=\"no-margin\">说明</h2>\n</div>\n<div class=\"wrapper-md\">\n    <div class=\"pad-def bor-def bg-white\">\n        <ul>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">当前版本</div>\n                <div class=\"exp-content\">v5.0.2</div>\n            </li>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">背景</div>\n                <div class=\"exp-content\">基于google的UIBootstrap,\n                    <a class=\"text-info\" href=\"https://angular.cn/\" target=\"_blank\">Angular</a>(区别于angular1.x)\n                </div>\n            </li>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">适用项目</div>\n                <div class=\"exp-content\">PC后台管理系统</div>\n            </li>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">浏览器支持</div>\n                <div class=\"exp-content\">IE9+、chrome、firefox等主流浏览器</div>\n            </li>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">技术栈</div>\n                <div class=\"exp-content\">Typescript+<a class=\"text-info\" href=\"https://angular.cn/\" target=\"_blank\">Angular</a>+html+less</div>\n            </li>\n            <li class=\"clearfix mar-b-sm\">\n                <div class=\"exp-label\">开发环境</div>\n                <div class=\"exp-content\">node.js,angular/cli</div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/explanation/explanation.component.less":
/***/ (function(module, exports) {

module.exports = ".exp-label {\n  font-weight: bold;\n}\n@media (min-width: 768px) {\n  .exp-content {\n    float: left;\n  }\n  .exp-label {\n    float: left;\n    width: 10em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/about/explanation/explanation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationComponent; });
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

var ExplanationComponent = /** @class */ (function () {
    function ExplanationComponent(elemRef) {
        this.elemRef = elemRef;
    }
    ExplanationComponent.prototype.ngOnInit = function () {
    };
    ExplanationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'explanation',
            template: __webpack_require__("./src/app/about/explanation/explanation.component.html"),
            styles: [__webpack_require__("./src/app/about/explanation/explanation.component.less")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ExplanationComponent);
    return ExplanationComponent;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map