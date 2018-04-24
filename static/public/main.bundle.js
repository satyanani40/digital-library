webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_router_config__ = __webpack_require__("../../../../../src/app/config/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__publish_book_publish_book_component__ = __webpack_require__("../../../../../src/app/publish-book/publish-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__persons_persons_component__ = __webpack_require__("../../../../../src/app/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__publish_book_publish_book_component__["a" /* PublishBookComponent */],
                __WEBPACK_IMPORTED_MODULE_15__persons_persons_component__["a" /* PersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_book_edit_book_component__["a" /* EditBookComponent */],
                __WEBPACK_IMPORTED_MODULE_18__categories_categories_component__["a" /* CategoriesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__config_router_config__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ag_grid_angular__["AgGridModule"].withComponents([])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_app_service_module__["a" /* AppServiceModule */], __WEBPACK_IMPORTED_MODULE_13__config_constant_config__["a" /* AppUrls */], __WEBPACK_IMPORTED_MODULE_12__shared_app_service_module__["c" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__shared_app_service_module__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_12__shared_app_service_module__["d" /* Languages */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Categories</h3>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let item of categories\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          {{ item.category_name }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(appService, appUrls) {
        this.appService = appService;
        this.appUrls = appUrls;
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.appService.get(this.appUrls.categories).subscribe(function (data) {
            console.log(data);
            _this.categories = data['_items'];
        }, function (err) {
            console.log(err);
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */],
            __WEBPACK_IMPORTED_MODULE_2__config_constant_config__["a" /* AppUrls */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/constant.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUrls; });
/* Application Constants */
// API End points
var AppUrls = /** @class */ (function () {
    function AppUrls() {
        this.baseUrl = 'http://ec2-18-220-81-9.us-east-2.compute.amazonaws.com/api/1.0/';
        // REST End points
        this.login = this.baseUrl + 'auth/login';
        this.register = this.baseUrl + 'auth/signup';
        this.confirmEmail = this.baseUrl + 'account/ConfirmEmailAndSetPassword';
        this.resetPassword = this.baseUrl + 'reset';
        this.sendForgotPasswordMail = this.baseUrl + 'Password/SendForgotPasswordMail';
        this.books_list = this.baseUrl + 'books';
        // public getChipDetails = 'http://demo3039112.mockable.io/chipDashboard';
        this.categories = this.baseUrl + 'categories';
        this.authors = this.baseUrl + 'authors';
        this.users = this.baseUrl + 'persons';
        this.user_details = this.baseUrl + 'user_details';
        this.upload_file = this.baseUrl + 'upload-file';
    }
    return AppUrls;
}());



/***/ }),

/***/ "../../../../../src/app/config/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publish_book_publish_book_component__ = __webpack_require__("../../../../../src/app/publish-book/publish-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__persons_persons_component__ = __webpack_require__("../../../../../src/app/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");








var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_app_service_module__["b" /* AuthGuardService */]] },
    { path: 'book-catelog', component: __WEBPACK_IMPORTED_MODULE_3__publish_book_publish_book_component__["a" /* PublishBookComponent */] },
    { path: 'edit-book/:_id', component: __WEBPACK_IMPORTED_MODULE_6__edit_book_edit_book_component__["a" /* EditBookComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'persons', component: __WEBPACK_IMPORTED_MODULE_4__persons_persons_component__["a" /* PersonsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_app_service_module__["b" /* AuthGuardService */]] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Book: {{ bookInfo['book_title'] }}</h3>\n  <hr>\n  <form [formGroup]=\"bookForm\" (submit)=\"postBookDetails(bookForm.value)\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n          <label for=\"title\">Book Title</label>\n          <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Book title\"\n                 formControlName=\"book_title\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"sub_title\">Sub Title</label>\n          <input type=\"text\" id=\"sub_title\" class=\"form-control\" placeholder=\"Sub title\"\n                 formControlName=\"sub_title\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"summary\">Book Summary</label>\n          <textarea type=\"text\" id=\"summary\" class=\"form-control\" placeholder=\"Book Summary\"\n                    formControlName=\"book_summary\" rows=\"2\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"keywords\">Book Keywords</label>\n          <textarea type=\"text\" id=\"keywords\" class=\"form-control\" placeholder=\"Book keywords\"\n                    formControlName=\"book_keywords\" rows=\"2\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pages\">No.of Pages</label>\n          <input type=\"text\" id=\"pages\" class=\"form-control\" placeholder=\"No.of Pages\"\n                 formControlName=\"no_of_pages\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"Author\">Authors</label>\n          <input type=\"text\" id=\"Author\" class=\"form-control\" placeholder=\"Author\" formControlName=\"book_authors\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"book_author_desc\">Book Author Description</label>\n          <textarea formControlName=\"book_author_desc\" id=\"book_author_desc\" rows=\"2\"\n                    placeholder=\"Book Author Description\" class=\"form-control\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Availability\">Availability</label>\n          <select formControlName=\"availability\" id=\"Availability\" class=\"form-control\">\n            <option *ngFor=\"let av of trueFalseArray\" value=\"{{ av.val }}\">{{ av.text }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n          <label for=\"hcopy_price\">Hard copy Price</label>\n          <input type=\"number\" id=\"hcopy_price\" class=\"form-control\"\n                 placeholder=\"Hard copy Price\" formControlName=\"hcopy_price\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ecopy_price\">E-copy Price</label>\n          <input type=\"number\" id=\"ecopy_price\" class=\"form-control\"\n                 placeholder=\"E-copy Price\" formControlName=\"ecopy_price\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"book_image\">Book Image</label>\n          <input type=\"file\" (change)=\"fileChangeEvent($event)\" #imageUpload id=\"book_image\"\n                 class=\"form-control\" placeholder=\"Book Image\" required />\n        </div>\n\n        <div class=\"form-group image-preview\" *ngIf=\"imagePreview['src']\">\n          <img src=\"{{ imagePreview.src }}\" alt=\"{{ imagePreview.title }}\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"m_group\">Book Category</label>\n          <select name=\"m_group\" id=\"m_group\" formControlName=\"book_categories\" class=\"form-control\">\n            <option *ngFor=\"let item of categories\" value=\"{{ item._id }}\">{{ item.category_name }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"language\">Language</label>\n          <select formControlName=\"language\" id=\"language\" class=\"form-control\">\n            <option *ngFor=\"let av of languages\" value=\"{{ av.val }}\">{{ av.text }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"publisher\">Publisher</label>\n          <input type=\"text\" id=\"publisher\" class=\"form-control\" placeholder=\"Publisher\" formControlName=\"publisher\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ISBN\">ISBN 10</label>\n          <input type=\"text\" id=\"ISBN\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_10\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ISBN_13\">ISBN 13</label>\n          <input type=\"text\" id=\"ISBN_13\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_13\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"published_date\">Published date</label>\n          <!--<input type=\"text\" id=\"published_date\" class=\"form-control\" placeholder=\"Published date\"\n                 formControlName=\"published_date\" />-->\n          <input type=\"text\" id=\"published_date\" placeholder=\"Published date\" class=\"form-control\" bsDatepicker\n                 formControlName=\"published_date\" />\n        </div>\n\n      </div> <!-- end col -->\n      <div class=\"col-lg-4\">\n        <h5 class=\"text-uppercase\" style=\"color: orangered;\"><b>Do you have E-Book?</b></h5>\n        <div class=\"form-group\">\n          <label for=\"e-book\">E-Book</label>\n          <input type=\"file\" class=\"form-control\" placeholder=\"E-book\" formControlName=\"ebook\" id=\"e-book\" />\n        </div>\n      </div> <!-- end col -->\n    </div> <!-- end row -->\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\">Publish</button>\n        <button class=\"btn-default btn-sm btn\" type=\"reset\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(appService, langs, appUrls, activatedRoute) {
        var _this = this;
        this.appService = appService;
        this.langs = langs;
        this.appUrls = appUrls;
        this.activatedRoute = activatedRoute;
        this.bookInfo = {};
        this.myParams = {};
        this.googleBookInfo = {};
        this.categories = [];
        this.imagePreview = {};
        this.bookForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            book_title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            sub_title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_summary: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_keywords: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            no_of_pages: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_authors: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_author_desc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            availability: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](true),
            hcopy_price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ecopy_price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_categories: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            language: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            publisher: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ISBN_10: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ISBN_13: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            published_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            image_small_thumbnail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            image_thumbnail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.myParams = params;
        });
    }
    EditBookComponent.prototype.ngOnInit = function () {
        this.trueFalseArray = [
            { text: 'Yes', val: true },
            { text: 'No', val: false }
        ];
        this.languages = this.langs.get();
        this.getCategories();
    };
    EditBookComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        var image = this.imageInput.nativeElement['files'][0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imagePreview = {
                src: e.target.result,
                title: image['name']
            };
        };
        reader.readAsDataURL(this.imageInput.nativeElement['files'][0]);
    };
    EditBookComponent.prototype.getCategories = function () {
        var _this = this;
        this.appService.get(this.appUrls.categories).subscribe(function (data) {
            console.log(data);
            _this.categories = data['_items'];
            _this.getBookDetails();
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent.prototype.getBookDetails = function () {
        var _this = this;
        this.appService.get(this.appUrls.books_list + '/' + this.myParams['_id']).subscribe(function (data) {
            console.log(data);
            _this.bookInfo = data;
            _this.bookForm.patchValue(data);
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent.prototype.postBook = function (bookForm) {
        bookForm['book_categories'] = [bookForm['book_categories']];
        this.appService.post(this.appUrls.books_list, bookForm).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent.prototype.postBookDetails = function (bookForm) {
        var _this = this;
        if (this.imageInput.nativeElement.value) {
            var formData = new FormData();
            formData.append('file', this.imageInput.nativeElement['files'][0]);
            this.appService.post(this.appUrls.upload_file, formData, true).subscribe(function (data) {
                console.log(data);
                if (data && data['data']) {
                    bookForm['image_small_thumbnail'] = data['data']['path'];
                    bookForm['image_thumbnail'] = data['data']['path'];
                }
                console.log('Book data', bookForm);
                _this.postBook(bookForm);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.postBook(bookForm);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageUpload'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditBookComponent.prototype, "imageInput", void 0);
    EditBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__("../../../../../src/app/edit-book/edit-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["d" /* Languages */],
            __WEBPACK_IMPORTED_MODULE_3__config_constant_config__["a" /* AppUrls */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br>\n\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-balham\"\n                   [gridOptions]=\"gridOptions\" [enableSorting]=\"true\"\n                   [enableFilter]=\"true\" [pagination]=\"true\" [rowSelection]=\"rowSelection\"\n                   [enableColResize]=\"true\" [suppressRowClickSelection]=\"true\"\n                   (selectionChanged)=\"onSelectionChanged($event)\" (cellClicked)=\"cellClicked($event)\">\n  </ag-grid-angular>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(appService, appUrls, route) {
        this.appService = appService;
        this.appUrls = appUrls;
        this.route = route;
        this.gridApi = {};
        this.gridOptions = {};
        this.gridOptions.rowData = [];
        this.rowSelection = 'single';
        this.gridOptions.columnDefs = [{
                headerName: 'Book Title', field: 'book_title',
            }, {
                headerName: 'Author', field: 'book_authors'
            }, {
                headerName: 'Book Image', field: 'book_image'
            },
            {
                headerName: 'ISBN 13', field: 'ISBN_13', width: 100
            },
            {
                headerName: 'Lease Price', field: 'lease_price', width: 100
            }, {
                headerName: 'Languages', field: 'language', width: 100
            }, {
                headerName: 'Year', field: 'published_date', width: 100
            }, {
                headerName: 'No.of Pages', field: 'no_of_pages', width: 100
            }, {
                headerName: 'Book Summary', field: 'book_summary', width: 100
            }
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.appUrls.books_list);
        this.appService.get(this.appUrls.books_list).subscribe(function (data) {
            var items = data['_items'];
            _this.gridOptions.api.setRowData(items);
        });
    };
    HomepageComponent.prototype.cellClicked = function (event) {
        console.log(event['data']['_id']);
        if (event['data'] && event['data']['_id']) {
            this.route.navigate(['/edit-book', event['data']['_id']]);
        }
    };
    HomepageComponent.prototype.onSelectionChanged = function (event) {
        var selectedRows = this.gridApi.getSelectedRows();
        selectedRows.forEach(function (selectedRow, index) {
            console.log(selectedRow);
        });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */],
            __WEBPACK_IMPORTED_MODULE_2__config_constant_config__["a" /* AppUrls */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account-box\r\n{\r\n  border: 1px solid #DDDDDD;\r\n  border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -khtml-border-radius: 2px;\r\n  -o-border-radius: 2px;\r\n  z-index: 3;\r\n  font-size: 13px !important;\r\n  font-family: \"Helvetica Neue\" ,Helvetica,Arial,sans-serif;\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n}\r\n\r\n.logo\r\n{\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\nimg {\r\n  max-height: 100%;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100%;\r\n  margin: 30px 0;\r\n}\r\n\r\n.forgotLnk\r\n{\r\n  margin-top: 10px;\r\n  display: block;\r\n}\r\n\r\n.btn-default {\r\n  color: #000;\r\n}\r\n\r\n.or-box\r\n{\r\n  position: relative;\r\n  border-top: 1px solid #dfdfdf;\r\n  padding-top: 20px;\r\n  margin-top:20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <div class=\"account-box\">\n        <div class=\"logo\">\n          <img src=\"http://www.ala.org/tools/sites/ala.org.tools/files/content/libfactsheets/large-librarysymbol.jpg\" alt=\"\"/>\n        </div>\n        <hr>\n        <form [formGroup]=\"lForm\" class=\"form-signin\" (submit)=\"login(lForm.value, lForm)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"pass\" placeholder=\"Password\" required />\n          </div>\n          <button class=\"btn btn-md btn-default btn-block\" type=\"submit\">\n            Sign in\n          </button>\n        </form>\n        <a class=\"forgotLnk\">I can't access my account</a>\n        <div class=\"or-box row-block\">\n          <div class=\"row\">\n            <div class=\"col-md-12 row-block\">\n              <a routerLink=\"/register\" class=\"btn btn-primary btn-block\">Create New Account</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, appService, router, appUrls) {
        this.authService = authService;
        this.appService = appService;
        this.router = router;
        this.appUrls = appUrls;
        this.lForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('suryamuppalla@gmail.com'),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('surya')
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (user, lform) {
        var _this = this;
        console.log(user, lform);
        this.appService.post(this.appUrls.login, user).subscribe(function (data) {
            _this.authService.setToken(data['data']['login_token']);
            localStorage.setItem('userInfo', data['data']);
            _this.router.navigate(['/homepage']);
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["c" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__config_constant_config__["a" /* AppUrls */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes blinker {\r\n  from {opacity: 1.0;}\r\n  to {opacity: 0.0;}\r\n}\r\n.blink{\r\n  color: orangered !important;\r\n  font-weight: bold !important;\r\n  text-decoration: blink;\r\n  -webkit-animation-name: blinker;\r\n  -webkit-animation-duration: 0.6s;\r\n  -webkit-animation-iteration-count:infinite;\r\n  -webkit-animation-timing-function:ease-in-out;\r\n  -webkit-animation-direction: alternate;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Menu</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/homepage\">Brand</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/book-catelog\" class=\"blink\">Book Catelog</a>\n        </li>\n        <li><a routerLink=\"/categories\">Categories</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/login\"><b>Login</b></a></li>\n        <!--<li><a routerLink=\"/register\">Register</a></li>-->\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/persons/persons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <h5><b>{{ usersMeta.total }}</b> users in our database!</h5>\r\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 700px;\" class=\"ag-theme-balham\"\r\n                   [gridOptions]=\"gridOptions\" [enableSorting]=\"true\"\r\n                   [enableFilter]=\"true\" [pagination]=\"true\" [rowSelection]=\"rowSelection\"\r\n                   [enableColResize]=\"true\" [suppressRowClickSelection]=\"true\">\r\n  </ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonsComponent = /** @class */ (function () {
    function PersonsComponent(appService, appUrls) {
        this.appService = appService;
        this.appUrls = appUrls;
        this.usersMeta = {};
        this.gridOptions = {};
        this.gridOptions.rowData = [];
        this.rowSelection = 'multiple';
        this.gridOptions.columnDefs = [
            { headerName: 'Name', field: 'first_name' },
            { headerName: 'Email', field: 'email' },
            { headerName: 'Mobile', field: 'mobile_number' },
            { headerName: 'Registered on ', field: '_created' },
            { headerName: 'Gender', field: 'gender' },
            { headerName: 'Status', field: 'status' }
        ];
    }
    PersonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.appUrls.books_list);
        this.appService.get(this.appUrls.users).subscribe(function (data) {
            console.log(data);
            _this.usersMeta = data['_meta'];
            _this.gridOptions.api.setRowData(data['_items']);
        });
    };
    PersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-persons',
            template: __webpack_require__("../../../../../src/app/persons/persons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/persons/persons.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */], __WEBPACK_IMPORTED_MODULE_2__config_constant_config__["a" /* AppUrls */]])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-isbn {\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\n.image-preview {\r\n  height: 150px;\r\n  width: 150px;\r\n  border: 1px solid #DDDDDD;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 5px;\r\n}\r\n.image-preview img {\r\n  height: auto;\r\n  max-height: 100%;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Book Catelog with ISBN number</h3>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <form (submit)=\"getBookDetails(isbnSearch)\" >\r\n        <div class=\"form-group\">\r\n          <input id=\"isbnInput\" onClick=\"javascript:this.form.isbn.select();\" type=\"text\"\r\n                  class=\"form-control\" placeholder=\"Enter ISBN number\"\r\n                  name=\"isbn\" [(ngModel)]=\"isbnSearch\" required=\"required\" autocomplete=\"off\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-default btn-sm\">Get Details</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n  <form [formGroup]=\"bookForm\" (submit)=\"postBookDetails(bookForm.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Book Title</label>\r\n          <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Book title\"\r\n                 formControlName=\"book_title\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"sub_title\">Sub Title</label>\r\n          <input type=\"text\" id=\"sub_title\" class=\"form-control\" placeholder=\"Sub title\"\r\n                 formControlName=\"sub_title\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"summary\">Book Summary</label>\r\n          <textarea type=\"text\" id=\"summary\" class=\"form-control\" placeholder=\"Book Summary\"\r\n                    formControlName=\"book_summary\" rows=\"2\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"keywords\">Book Keywords</label>\r\n          <textarea type=\"text\" id=\"keywords\" class=\"form-control\" placeholder=\"Book keywords\"\r\n                    formControlName=\"book_keywords\" rows=\"2\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"pages\">No.of Pages</label>\r\n          <input type=\"text\" id=\"pages\" class=\"form-control\" placeholder=\"No.of Pages\"\r\n                 formControlName=\"no_of_pages\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"Author\">Authors</label>\r\n          <input type=\"text\" id=\"Author\" class=\"form-control\" placeholder=\"Author\" formControlName=\"book_authors\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"book_author_desc\">Book Author Description</label>\r\n          <textarea formControlName=\"book_author_desc\" id=\"book_author_desc\" rows=\"2\"\r\n                    placeholder=\"Book Author Description\" class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Availability\">Availability</label>\r\n          <select formControlName=\"availability\" id=\"Availability\" class=\"form-control\">\r\n            <option *ngFor=\"let av of trueFalseArray\" value=\"{{ av.val }}\">{{ av.text }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"hcopy_price\">Hard copy Price</label>\r\n          <input type=\"number\" id=\"hcopy_price\" class=\"form-control\"\r\n                 placeholder=\"Hard copy Price\" formControlName=\"hcopy_price\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ecopy_price\">E-copy Price</label>\r\n          <input type=\"number\" id=\"ecopy_price\" class=\"form-control\"\r\n                 placeholder=\"E-copy Price\" formControlName=\"ecopy_price\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"book_image\">Book Image</label>\r\n          <input type=\"file\" (change)=\"fileChangeEvent($event)\" #imageUpload id=\"book_image\"\r\n                 class=\"form-control\" placeholder=\"Book Image\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group image-preview\" *ngIf=\"imagePreview['src']\">\r\n          <img src=\"{{ imagePreview.src }}\" alt=\"{{ imagePreview.title }}\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"m_group\">Book Category</label>\r\n          <select name=\"m_group\" id=\"m_group\" formControlName=\"book_categories\" class=\"form-control\">\r\n            <option *ngFor=\"let item of categories\" value=\"{{ item._id }}\">{{ item.category_name }}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"language\">Language</label>\r\n          <select formControlName=\"language\" id=\"language\" class=\"form-control\">\r\n            <option *ngFor=\"let av of languages\" value=\"{{ av.val }}\">{{ av.text }}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"publisher\">Publisher</label>\r\n          <input type=\"text\" id=\"publisher\" class=\"form-control\" placeholder=\"Publisher\" formControlName=\"publisher\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ISBN\">ISBN 10</label>\r\n          <input type=\"text\" id=\"ISBN\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_10\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ISBN_13\">ISBN 13</label>\r\n          <input type=\"text\" id=\"ISBN_13\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_13\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"published_date\">Published date</label>\r\n          <!--<input type=\"text\" id=\"published_date\" class=\"form-control\" placeholder=\"Published date\"\r\n                 formControlName=\"published_date\" />-->\r\n          <input type=\"text\" id=\"published_date\" placeholder=\"Published date\" class=\"form-control\" bsDatepicker\r\n            formControlName=\"published_date\" />\r\n        </div>\r\n\r\n      </div> <!-- end col -->\r\n      <div class=\"col-lg-4\">\r\n        <h5 class=\"text-uppercase\" style=\"color: orangered;\"><b>Do you have E-Book?</b></h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"e-book\">E-Book</label>\r\n          <input type=\"file\" class=\"form-control\" placeholder=\"E-book\" formControlName=\"ebook\" id=\"e-book\" />\r\n        </div>\r\n      </div> <!-- end col -->\r\n    </div> <!-- end row -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\">Publish</button>\r\n        <button class=\"btn-default btn-sm btn\" type=\"reset\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__ = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constant_config__ = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublishBookComponent = /** @class */ (function () {
    function PublishBookComponent(appService, langs, appUrls) {
        this.appService = appService;
        this.langs = langs;
        this.appUrls = appUrls;
        this.bookInfo = {};
        this.googleBookInfo = {};
        this.categories = [];
        this.imagePreview = {};
        this.bookForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            book_title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            sub_title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_summary: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_keywords: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            no_of_pages: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_authors: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_author_desc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            availability: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](true),
            hcopy_price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ecopy_price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            book_categories: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            language: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            publisher: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ISBN_10: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ISBN_13: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            ebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            published_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            image_small_thumbnail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            image_thumbnail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    PublishBookComponent.prototype.ngOnInit = function () {
        this.trueFalseArray = [
            { text: 'Yes', val: true },
            { text: 'No', val: false }
        ];
        this.languages = this.langs.get();
        this.getCategories();
    };
    PublishBookComponent.prototype.getBookDetails = function (isbnNumber) {
        var _this = this;
        if (!isbnNumber) {
            return;
        }
        var googleBookAPI = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnNumber;
        this.appService.get(googleBookAPI).subscribe(function (data) {
            console.log(data);
            if (data['items'] && data['items'].length) {
                _this.googleBookInfo = data['items'][0]['volumeInfo'];
                console.log(_this.googleBookInfo);
                if (_this.googleBookInfo['industryIdentifiers']) {
                    _this.googleBookInfo.industryIdentifiers.forEach(function (item) {
                        _this.bookInfo[item['type']] = item['identifier'];
                    });
                }
                if (_this.googleBookInfo['authors']) {
                    _this.bookInfo['book_authors'] = _this.googleBookInfo.authors;
                }
                _this.bookInfo['book_title'] = _this.googleBookInfo['title'];
                _this.bookInfo['sub_title'] = _this.googleBookInfo['subtitle'];
                _this.bookInfo['publisher'] = _this.googleBookInfo['publisher'];
                _this.bookInfo['published_date'] = _this.googleBookInfo['publishedDate'];
                /*if (this.googleBookInfo['categories']) {
                  this.bookInfo['book_category'] = this.googleBookInfo.categories.toString();
                }*/
                _this.bookInfo['language'] = _this.googleBookInfo['language'];
                _this.bookInfo['book_summary'] = _this.googleBookInfo['description'];
                _this.bookInfo['no_of_pages'] = _this.googleBookInfo['pageCount'];
                if (_this.googleBookInfo['imageLinks']) {
                    _this.bookInfo['image_small_thumbnail'] = _this.googleBookInfo['imageLinks']['smallThumbnail'];
                    _this.bookInfo['image_thumbnail'] = _this.googleBookInfo['imageLinks']['thumbnail'];
                    _this.imagePreview['src'] = _this.googleBookInfo['imageLinks']['thumbnail'];
                    _this.imageInput.nativeElement.required = false;
                }
                else {
                    _this.imageInput.nativeElement.required = true;
                }
                console.log(_this.bookInfo);
                _this.bookForm.patchValue(_this.bookInfo);
            }
        }, function (err) {
            console.log(err);
        });
    };
    PublishBookComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        var image = this.imageInput.nativeElement['files'][0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imagePreview = {
                src: e.target.result,
                title: image['name']
            };
        };
        reader.readAsDataURL(this.imageInput.nativeElement['files'][0]);
    };
    PublishBookComponent.prototype.getCategories = function () {
        var _this = this;
        this.appService.get(this.appUrls.categories).subscribe(function (data) {
            console.log(data);
            _this.categories = data['_items'];
        }, function (err) {
            console.log(err);
        });
    };
    PublishBookComponent.prototype.postBook = function (bookForm) {
        bookForm['book_categories'] = [bookForm['book_categories']];
        this.appService.post(this.appUrls.books_list, bookForm).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    PublishBookComponent.prototype.postBookDetails = function (bookForm) {
        var _this = this;
        if (this.imageInput.nativeElement.value) {
            var formData = new FormData();
            formData.append('file', this.imageInput.nativeElement['files'][0]);
            this.appService.post(this.appUrls.upload_file, formData, true).subscribe(function (data) {
                console.log(data);
                if (data && data['data']) {
                    bookForm['image_small_thumbnail'] = data['data']['path'];
                    bookForm['image_thumbnail'] = data['data']['path'];
                }
                console.log('Book data', bookForm);
                _this.postBook(bookForm);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.postBook(bookForm);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageUpload'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PublishBookComponent.prototype, "imageInput", void 0);
    PublishBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publish-book',
            template: __webpack_require__("../../../../../src/app/publish-book/publish-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/publish-book/publish-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["a" /* AppServiceModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_app_service_module__["d" /* Languages */],
            __WEBPACK_IMPORTED_MODULE_3__config_constant_config__["a" /* AppUrls */]])
    ], PublishBookComponent);
    return PublishBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account-box\r\n{\r\n  border: 1px solid #DDDDDD;\r\n  border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -khtml-border-radius: 2px;\r\n  -o-border-radius: 2px;\r\n  z-index: 3;\r\n  font-size: 13px !important;\r\n  font-family: \"Helvetica Neue\" ,Helvetica,Arial,sans-serif;\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n}\r\n\r\n.logo\r\n{\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\nimg {\r\n  max-height: 100%;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100%;\r\n  margin: 30px 0;\r\n}\r\n\r\n.forgotLnk\r\n{\r\n  margin-top: 10px;\r\n  display: block;\r\n}\r\n\r\n.btn-default {\r\n  color: #000;\r\n}\r\n\r\n.or-box\r\n{\r\n  position: relative;\r\n  border-top: 1px solid #dfdfdf;\r\n  padding-top: 20px;\r\n  margin-top:20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <div class=\"account-box\">\n        <div class=\"logo\">\n          <img src=\"http://www.ala.org/tools/sites/ala.org.tools/files/content/libfactsheets/large-librarysymbol.jpg\" alt=\"\"/>\n        </div>\n        <hr>\n        <form class=\"form-signin\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"checkbox\" value=\"remember-me\" />\n            Keep me signed in\n          </div>\n          <button class=\"btn btn-md btn-default btn-block\" type=\"submit\">\n            Register Now\n          </button>\n        </form>\n        <div class=\"or-box row-block\">\n          <div class=\"row\">\n            <div class=\"col-md-12 row-block\">\n              <a routerLink=\"/login\" class=\"btn btn-primary btn-block\">Login Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/app.service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Languages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppServiceModule = /** @class */ (function () {
    function AppServiceModule(httpClient) {
        this.httpClient = httpClient;
        this.options = new Headers({ 'Content-Type': 'application/json' });
    }
    AppServiceModule.prototype.get = function (url) {
        return this.httpClient.get(url, this.options);
    };
    AppServiceModule.prototype.post = function (url, data, noHeaders) {
        this.options = (noHeaders) ? new Headers({ 'Content-Type': undefined }) : this.options;
        console.log(this.options);
        return this.httpClient.post(url, data, this.options);
    };
    AppServiceModule.prototype.put = function (url, data) {
        this.httpClient.put(url, data, this.options);
    };
    AppServiceModule.prototype.delete = function (url) {
        this.httpClient.delete(url, this.options);
    };
    AppServiceModule.prototype.toast = function (titleMessage, bodyMessage, toastType) {
        var x = document.getElementById('toast');
        x.className = (toastType === 's') ? 'show green' : 'show red';
        // set title
        var tTitle = document.getElementById('toast-title'), tBody = document.getElementById('toast-body');
        tTitle.innerText = titleMessage;
        tBody.innerText = bodyMessage;
        setTimeout(function () { x.className = x.className.replace('show', ''); }, 5000);
    };
    AppServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppServiceModule);
    return AppServiceModule;
}());

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('access_token');
        return !!(token);
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('access_token', token);
        return true;
    };
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem('access_token');
        return true;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [AuthService, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());

var Languages = /** @class */ (function () {
    function Languages() {
        this.languages = [
            { text: 'Telugu', val: 'te' },
            { text: 'English', val: 'en' },
            { text: 'Tamil', val: 'ta' }
        ];
    }
    Languages.prototype.get = function () {
        return this.languages;
    };
    Languages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Languages);
    return Languages;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map