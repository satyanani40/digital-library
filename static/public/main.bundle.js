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

module.exports = "<app-navbar></app-navbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ag_grid_angular_1 = __webpack_require__("../../../../ag-grid-angular/main.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var router_config_1 = __webpack_require__("../../../../../src/app/config/router.config.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var homepage_component_1 = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
var publish_book_component_1 = __webpack_require__("../../../../../src/app/publish-book/publish-book.component.ts");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var membership_component_1 = __webpack_require__("../../../../../src/app/membership/membership.component.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var edit_book_component_1 = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
var categories_component_1 = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
var app_pipe_1 = __webpack_require__("../../../../../src/app/app.pipe.ts");
var orders_component_1 = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
var forgotpassword_component_1 = __webpack_require__("../../../../../src/app/forgotpassword/forgotpassword.component.ts");
var updatepersons_component_1 = __webpack_require__("../../../../../src/app/updatepersons/updatepersons.component.ts");
var joinedmembers_component_1 = __webpack_require__("../../../../../src/app/joinedmembers/joinedmembers.component.ts");
var angular2_moment_1 = __webpack_require__("../../../../angular2-moment/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                navbar_component_1.NavbarComponent,
                register_component_1.RegisterComponent,
                homepage_component_1.HomepageComponent,
                publish_book_component_1.PublishBookComponent,
                membership_component_1.MembershipComponent,
                edit_book_component_1.EditBookComponent,
                categories_component_1.CategoriesComponent,
                app_pipe_1.FilterPipe,
                orders_component_1.OrdersComponent,
                forgotpassword_component_1.ForgotpasswordComponent,
                updatepersons_component_1.UpdatepersonsComponent,
                joinedmembers_component_1.JoinedmembersComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular2_moment_1.MomentModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(router_config_1.routes),
                ngx_bootstrap_1.BsDatepickerModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.PopoverModule.forRoot(),
                ngx_bootstrap_1.TooltipModule.forRoot(),
                ag_grid_angular_1.AgGridModule.withComponents([])
            ],
            providers: [app_service_module_1.AppServiceModule, constant_config_1.AppUrls, app_service_module_1.AuthService, app_service_module_1.AuthGuardService, app_service_module_1.Languages],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, field) {
        var myItems = [];
        if (!items || !filter) {
            return items;
        }
        items.forEach(function (item) {
            if (item[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                myItems.push(item);
            }
        });
        return myItems;
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category-footer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 16px;\r\n}\r\n.panel-body:hover .category-footer {\r\n  display: block !important;\r\n}\r\n._created {\r\n  font-size: 10px;\r\n  color: #666;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <input type=\"text\" placeholder=\"Search...\"\n             [(ngModel)]=\"search\" class=\"form-control\">\n    </div>\n    <div class=\"col-lg-3\">\n      <button class=\"btn btn-primary btn-sm\" (click)=\"openModal(addTemplate, {})\">Add new Category</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let item of categories | filter: search: 'category_name'; let index = index;\">\n      <div class=\"panel panel-default\" (mouseover)=\"hoverCategory[item['_id']] = true;\"\n           (mouseleave)=\"hoverCategory[item['_id']] = false;\">\n        <div class=\"panel-body pointer\">\n          <h5><b>{{ item.category_name }}</b></h5>\n          <span class=\"_created\">Created: {{ item['_created'] | date: 'yyyy-MM-dd hh:mm a' }}</span>\n        </div>\n        <div class=\"panel-footer category-footer\" *ngIf=\"hoverCategory[item['_id']]\">\n          <button class=\"btn btn-primary btn-xs\" (click)=\"openModal(template, item)\">Update</button>&nbsp;&nbsp;\n          <button class=\"btn btn-danger btn-xs\" (click)=\"openModal(deleteTemplate, item, index)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"(categories | filter: search: 'category_name').length === 0\">\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron text-center\">\n        <h2>Sorry!</h2>\n        <h4>No results found your criteria...</h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #addTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Category : {{ modalItem['category_name'] }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <form (submit)=\"addCategory(modalItem, false)\">\n          <div class=\"form-group\">\n            <input autocomplete=\"off\" type=\"text\" class=\"form-control\" name=\"category_name\" [(ngModel)]=\"modalItem['category_name']\" />\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\">Create</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Category : {{ modalItem['category_name'] }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <form (submit)=\"updateCategory(modalItem, true)\">\n          <div class=\"form-group\">\n            <input autocomplete=\"off\" type=\"text\" class=\"form-control\" name=\"category_name\" [(ngModel)]=\"modalItem['category_name']\" />\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n\n<ng-template #deleteTemplate>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title pull-left\">Title : {{ modalItem['category_name'] }}</h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h4>Are you sure you want to Delete?</h4>\n        <h6>Book Title: <b>{{ modalItem['category_name'] }}</b></h6>\n        <h6>Created on: {{ modalItem['_created'] | date: 'dd MMMM yyyy' }}</h6>\n        <br>\n        <button class=\"btn btn-sm btn-primary\" (click)=\"deleteCategory(modalItem, modalItem['index'])\">Delete Anyway</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(appService, appUrls, modalService) {
        this.appService = appService;
        this.appUrls = appUrls;
        this.modalService = modalService;
        this.categories = [];
        this.hoverCategory = {};
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.appUrls.loadingIcon = false;
        }, 500);
    };
    CategoriesComponent.prototype.openModal = function (template, item, index) {
        this.modalRef = this.modalService.show(template);
        this.modalItem = item;
        this.modalItem['index'] = index;
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        var query = { max_results: 100, sort: 'category_name' };
        this.appService.get(this.appUrls.categories, query).subscribe(function (data) {
            console.log(data);
            _this.categories = data['_items'];
        }, function (err) {
            console.log(err);
        });
    };
    CategoriesComponent.prototype.addCategory = function (item, type) {
        var _this = this;
        this.appUrls.loadingIcon = true;
        var url = this.appUrls.categories;
        this.appService.post(url, { category_name: item['category_name'] })
            .subscribe(function (success) {
            success['category_name'] = item['category_name'];
            _this.categories.push(success);
            _this.modalRef.hide();
            _this.appService.toast(item['category_name'], 'Successfully Created!', 's');
            _this.stopLoading();
        });
    };
    CategoriesComponent.prototype.updateCategory = function (item, type) {
        var _this = this;
        this.appUrls.loadingIcon = true;
        var url = this.appUrls.categories + '/' + item['_id'];
        this.appService.update(url, { category_name: item['category_name'] })
            .subscribe(function (success) {
            console.log(success);
            _this.modalRef.hide();
            _this.appService.toast(item['category_name'], 'Successfully updated!', 's');
            _this.stopLoading();
        });
    };
    CategoriesComponent.prototype.deleteCategory = function (item, index) {
        var _this = this;
        this.appUrls.loadingIcon = true;
        this.appService.delete(this.appUrls.categories + '/' + item['_id']).subscribe(function (success) {
            _this.appService.toast(item['category_name'], 'successfully deleted!', 's');
            _this.categories.splice(index, 1);
            _this.stopLoading();
        });
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            constant_config_1.AppUrls,
            modal_1.BsModalService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;


/***/ }),

/***/ "../../../../../src/app/config/constant.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Application Constants */
Object.defineProperty(exports, "__esModule", { value: true });
// API End points
var AppUrls = /** @class */ (function () {
    function AppUrls() {
        this.baseUrl = 'http://ec2-18-220-81-9.us-east-2.compute.amazonaws.com:8090/api/1.0/';
        this.custUrl = 'http://ec2-18-220-81-9.us-east-2.compute.amazonaws.com:8090/';
        // REST End points
        this.login = this.baseUrl + 'auth/login';
        this.register = this.baseUrl + 'auth/signup';
        this.me = this.baseUrl + 'auth/me';
        this.logout = this.baseUrl + 'auth/logout';
        this.confirmEmail = this.baseUrl + 'account/ConfirmEmailAndSetPassword';
        this.resetPassword = this.baseUrl + 'reset';
        this.sendForgotPasswordMail = this.baseUrl + 'Password/SendForgotPasswordMail';
        this.books_list = this.baseUrl + 'books';
        this.categories = this.baseUrl + 'categories';
        this.membership = this.baseUrl + 'membership';
        this.orders = this.baseUrl + 'orders';
        this.authors = this.baseUrl + 'authors';
        this.users = this.baseUrl + 'persons';
        this.upload_file = this.baseUrl + 'upload-file';
        this.loadingIcon = false;
    }
    return AppUrls;
}());
exports.AppUrls = AppUrls;


/***/ }),

/***/ "../../../../../src/app/config/router.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var homepage_component_1 = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
var publish_book_component_1 = __webpack_require__("../../../../../src/app/publish-book/publish-book.component.ts");
var membership_component_1 = __webpack_require__("../../../../../src/app/membership/membership.component.ts");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var edit_book_component_1 = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
var categories_component_1 = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
var orders_component_1 = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
var forgotpassword_component_1 = __webpack_require__("../../../../../src/app/forgotpassword/forgotpassword.component.ts");
var updatepersons_component_1 = __webpack_require__("../../../../../src/app/updatepersons/updatepersons.component.ts");
var joinedmembers_component_1 = __webpack_require__("../../../../../src/app/joinedmembers/joinedmembers.component.ts");
exports.routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'forgot-password', component: forgotpassword_component_1.ForgotpasswordComponent },
    { path: 'homepage', component: homepage_component_1.HomepageComponent, canActivate: [app_service_module_1.AuthGuardService] },
    { path: 'book-catelog', component: publish_book_component_1.PublishBookComponent },
    { path: 'edit-book/:_id', component: edit_book_component_1.EditBookComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'membership', component: membership_component_1.MembershipComponent, canActivate: [app_service_module_1.AuthGuardService] },
    { path: 'joined-members', component: joinedmembers_component_1.JoinedmembersComponent, canActivate: [app_service_module_1.AuthGuardService] },
    { path: 'update-person/:_id', component: updatepersons_component_1.UpdatepersonsComponent, canActivate: [app_service_module_1.AuthGuardService] },
    { path: 'orders', component: orders_component_1.OrdersComponent },
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
exports.push([module.i, ".image-preview {\r\n  height: 150px;\r\n  width: 150px;\r\n  border: 1px solid #DDDDDD;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 5px;\r\n  position: relative;\r\n}\r\n.image-preview span {\r\n  position: absolute;\r\n  top: -7px;\r\n  right: -7px;\r\n  background: #ddd;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 22px;\r\n  cursor: pointer;\r\n}\r\n.ebook-preview {\r\n  overflow: hidden;\r\n}\r\n.image-preview img {\r\n  height: auto;\r\n  max-height: 100%;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h3>Book: {{ bookInfo['book_title'] }}</h3>\n  <hr>\n  <form [formGroup]=\"bookForm\" (submit)=\"updateBookDetails(bookForm.value)\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n          <label for=\"title\">Book Title</label>\n          <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Book title\"\n                 formControlName=\"book_title\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"sub_title\">Sub Title</label>\n          <input type=\"text\" id=\"sub_title\" class=\"form-control\" placeholder=\"Sub title\"\n                 formControlName=\"sub_title\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"summary\">Book Summary</label>\n          <textarea type=\"text\" id=\"summary\" class=\"form-control\" placeholder=\"Book Summary\"\n                    formControlName=\"book_summary\" rows=\"2\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"keywords\">Book Keywords</label>\n          <textarea type=\"text\" id=\"keywords\" class=\"form-control\" placeholder=\"Book keywords\"\n                    formControlName=\"book_keywords\" rows=\"2\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pages\">No.of Pages</label>\n          <input type=\"text\" id=\"pages\" class=\"form-control\" placeholder=\"No.of Pages\"\n                 formControlName=\"no_of_pages\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"Author\">Authors</label>\n          <input type=\"text\" id=\"Author\" class=\"form-control\" placeholder=\"Author\" formControlName=\"book_authors\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"book_author_desc\">Book Author Description</label>\n          <textarea formControlName=\"book_author_desc\" id=\"book_author_desc\" rows=\"2\"\n                    placeholder=\"Book Author Description\" class=\"form-control\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Availability\">Availability</label>\n          <select formControlName=\"availability\" id=\"Availability\" class=\"form-control\">\n            <option *ngFor=\"let av of trueFalseArray\" value=\"{{ av.val }}\">{{ av.text }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n          <label for=\"hcopy_price\">Hard copy Price</label>\n          <input type=\"number\" id=\"hcopy_price\" class=\"form-control\"\n                 placeholder=\"Hard copy Price\" formControlName=\"hcopy_price\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"book_image\">Book Image</label>\n          <input type=\"file\" (change)=\"fileChangeEvent($event)\" #imageUpload id=\"book_image\"\n                 class=\"form-control\" placeholder=\"Book Image\" required />\n        </div>\n\n        <div class=\"form-group image-preview\" *ngIf=\"imagePreview['src']\">\n          <img src=\"{{ imagePreview.src }}\" alt=\"{{ imagePreview.title }}\">\n          <span *ngIf=\"imageInput.nativeElement.value\" (click)=\"removeImage()\">\n            <i class=\"glyphicon glyphicon-remove\"></i>\n          </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"m_group\">Book Category</label>\n          <select name=\"m_group\" id=\"m_group\" formControlName=\"book_categories\" class=\"form-control\">\n            <option *ngFor=\"let item of categories\" value=\"{{ item._id }}\">{{ item.category_name }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"language\">Language</label>\n          <select formControlName=\"language\" id=\"language\" class=\"form-control\">\n            <option *ngFor=\"let av of languages\" value=\"{{ av.val }}\">{{ av.text }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"publisher\">Publisher</label>\n          <input type=\"text\" id=\"publisher\" class=\"form-control\" placeholder=\"Publisher\" formControlName=\"publisher\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ISBN\">ISBN 10</label>\n          <input type=\"text\" id=\"ISBN\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_10\" />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ISBN_13\">ISBN 13</label>\n          <input type=\"text\" id=\"ISBN_13\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_13\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"published_date\">Published date</label>\n          <input type=\"text\" id=\"published_date\" placeholder=\"Published date\" class=\"form-control\" bsDatepicker\n                 formControlName=\"published_date\" />\n        </div>\n\n      </div> <!-- end col -->\n      <div class=\"col-lg-4\">\n        <h5 class=\"text-uppercase\" style=\"color: orangered;\"><b>Do you have E-Book?</b></h5>\n        <div class=\"form-group\">\n          <label for=\"e-book\">E-Book</label>\n          <input type=\"file\" (change)=\"eBookChangeEvent($event)\" class=\"form-control\" #eBookUpload placeholder=\"E-book\" id=\"e-book\" />\n        </div>\n        <div class=\"panel panel-default ebook-preview\" *ngIf=\"ebookPreview['src']\">\n          <div class=\"panel-body\" title=\"{{ ebookPreview['title'] }}\">\n            <h5>File name: <b>{{ ebookPreview['title'] }}</b></h5>\n            <h6><a class=\"pointer\" (click)=\"removeEBook()\">Remove</a></h6>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"ebookPreview['src']\">\n          <label for=\"ecopy_price\">E-copy Price</label>\n          <input type=\"number\" id=\"ecopy_price\" class=\"form-control\"\n                 placeholder=\"E-copy Price\" formControlName=\"ecopy_price\" />\n        </div>\n      </div> <!-- end col -->\n    </div> <!-- end row -->\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\">Update</button>\n        <button class=\"btn-default btn-sm btn\" type=\"reset\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
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
        this.ebookPreview = {};
        this.bookForm = new forms_1.FormGroup({
            book_title: new forms_1.FormControl(),
            sub_title: new forms_1.FormControl(),
            book_summary: new forms_1.FormControl(),
            book_keywords: new forms_1.FormControl(),
            no_of_pages: new forms_1.FormControl(),
            book_authors: new forms_1.FormControl(),
            book_author_desc: new forms_1.FormControl(),
            availability: new forms_1.FormControl(true),
            hcopy_price: new forms_1.FormControl(),
            ecopy_price: new forms_1.FormControl(),
            book_categories: new forms_1.FormControl(),
            language: new forms_1.FormControl(),
            publisher: new forms_1.FormControl(),
            ISBN_10: new forms_1.FormControl(),
            ISBN_13: new forms_1.FormControl(),
            published_date: new forms_1.FormControl(),
            image_small_thumbnail: new forms_1.FormControl(),
            image_thumbnail: new forms_1.FormControl()
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
    EditBookComponent.prototype.removeImage = function () {
        this.imageInput.nativeElement.value = '';
        this.imagePreview = {};
    };
    EditBookComponent.prototype.eBookChangeEvent = function (event) {
        var _this = this;
        var file = this.eBookInput.nativeElement['files'][0];
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e, file);
            _this.ebookPreview = {
                src: e.target.result,
                title: file['name']
            };
        };
        reader.readAsDataURL(this.eBookInput.nativeElement['files'][0]);
    };
    EditBookComponent.prototype.removeEBook = function () {
        this.ebookPreview = {};
        this.eBookInput.nativeElement.value = '';
        this.bookForm['ebook'] = '';
        this.bookInfo['ebook'] = '';
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
            data['published_date'] = new Date(data['published_date']).toLocaleString().split(',')[0];
            _this.bookForm.patchValue(data);
            _this.ebookPreview['src'] = data['ebook'];
            _this.ebookPreview['title'] = data['ebook'];
            _this.imagePreview['src'] = data['image_thumbnail'];
            _this.imagePreview['title'] = data['book_title'];
        }, function (err) {
            console.log(err);
        });
    };
    EditBookComponent.prototype.updateBook = function (bookForm) {
        var _this = this;
        if (typeof bookForm['book_authors'] === 'string') {
            bookForm['book_authors'] = bookForm['book_authors'].split(',');
        }
        if (typeof bookForm['book_categories'] === 'string') {
            bookForm['book_categories'] = [bookForm['book_categories']];
        }
        bookForm['published_date'] = new Date(bookForm['published_date']).toISOString();
        console.log('-------', bookForm, bookForm['book_categories']);
        this.appService.update(this.appUrls.books_list + '/' + this.myParams['_id'], bookForm).subscribe(function (data) {
            console.log(data);
            _this.appService.toast(bookForm['book_title'], 'Successfully updated!', 's');
        }, function (err) {
            console.log(err);
            _this.appService.toast('Something went wrong!', '', 'e');
        });
    };
    EditBookComponent.prototype.updateBookDetails = function (bookForm) {
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
                _this.updateBook(bookForm);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.updateBook(bookForm);
        }
    };
    __decorate([
        core_1.ViewChild('imageUpload'),
        __metadata("design:type", core_1.ElementRef)
    ], EditBookComponent.prototype, "imageInput", void 0);
    __decorate([
        core_1.ViewChild('eBookUpload'),
        __metadata("design:type", core_1.ElementRef)
    ], EditBookComponent.prototype, "eBookInput", void 0);
    EditBookComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-book',
            template: __webpack_require__("../../../../../src/app/edit-book/edit-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            app_service_module_1.Languages,
            constant_config_1.AppUrls,
            router_1.ActivatedRoute])
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;


/***/ }),

/***/ "../../../../../src/app/forgotpassword/forgotpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <br><br><br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-8\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body text-center\">\n          <br><br>\n          <h4>\n            Please contact your Administrator for any help!\n          </h4>\n          <h5>\n            <a routerLink=\"/login\">Click here</a> to go back!\n          </h5>\n          <br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent() {
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgotpassword',
            template: __webpack_require__("../../../../../src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());
exports.ForgotpasswordComponent = ForgotpasswordComponent;


/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination {\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <label>Search for</label>\n      <input type=\"text\" (keyup)=\"searchBooks(filter.search, $event)\"\n             class=\"form-control\" [(ngModel)]=\"filter.search\" placeholder=\"Search records from Database\">\n    </div>\n    <div class=\"col-lg-3 col-md-3\">\n      <label>Sort by</label>\n      <select name=\"sort\" id=\"sort\" class=\"form-control\" [(ngModel)]=\"query['sort']\" (change)=\"changeParams(query)\">\n        <option value=\"-_updated\">Updated on</option>\n        <option value=\"book_title\">Book Title</option>\n        <option value=\"-_created\">Created on</option>\n        <option value=\"publisher\">Publisher</option>\n        <option value=\"language\">Language</option>\n      </select>\n    </div>\n    <div class=\"col-lg-2 col-md-2\">\n      <label for=\"max_results\">Results per page</label>\n      <select name=\"max_results\" id=\"max_results\" class=\"form-control\"\n              [(ngModel)]=\"query.max_results\" (change)=\"changeParams(query)\">\n        <option value=\"15\">15</option>\n        <option value=\"30\">30</option>\n        <option value=\"50\">50</option>\n        <option value=\"100\">100</option>\n        <option value=\"150\">150</option>\n      </select>\n    </div>\n  </div>\n  <br>\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n      <tr>\n        <th>Action</th>\n        <th>Book title</th>\n        <th>Authors</th>\n        <th>availability</th>\n        <th>E - Book</th>\n        <th>Hard copy Price</th>\n        <th>E - Copy Price</th>\n        <th>ISBN 13</th>\n        <th>Publisher</th>\n        <th>Language</th>\n        <th>Created on</th>\n        <th>Updated on</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"pointer\" *ngFor=\"let item of books; let index = index;\">\n        <td>\n          <button title=\"Delete {{ item['book_title'] }}\" class=\"btn btn-xs\" (click)=\"openModal(deleteTemplate, item)\">\n            <span class=\"glyphicon glyphicon-trash\"></span>\n          </button>\n        </td>\n        <td (click)=\"cellClicked(item)\"><a>{{ item['book_title'] }}</a></td>\n        <td>{{ item['book_authors'] }}</td>\n        <td>{{ (item['availability']) ? 'Available' : 'Not Available' }}</td>\n        <td>{{ (item['ebook']) ? 'Available' : 'Not Available' }}</td>\n        <td>{{ item['hcopy_price'] }}</td>\n        <td>{{ item['ecopy_price'] }}</td>\n        <td>{{ item['ISBN_13'] }}</td>\n        <td>{{ item['publisher'] }} </td>\n        <td>{{ item['language'] }} </td>\n        <td>{{ item['_created'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n        <td>{{ item['_updated'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div class=\"row\" *ngIf=\"_meta\">\n    <div class=\"col-lg-1 col-md-1\">\n      <button class=\"btn btn-xs btn-default text-center\" (click)=\"pagination(_meta['page'] - 1)\">\n        <span class=\"glyphicon glyphicon-backward\"></span>\n      </button>&nbsp;\n      <button (click)=\"pagination(_meta['page'] + 1)\" class=\"btn btn-xs btn-default text-center\">\n        <span class=\"glyphicon glyphicon-forward\"></span>\n      </button>\n    </div>\n    <div class=\"col-lg-2 col-md-2 pull-right text-right\">\n      <h6 class=\"margin-5\">Total Records: <b>{{ _meta['total'] }}</b></h6>\n    </div>\n  </div>\n</div>\n\n\n\n<ng-template #deleteTemplate>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title pull-left\">Title : {{ modalItem['book_title'] }}</h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h4>Are you sure you want to Delete?</h4>\n        <h6>Book Title: <b>{{ modalItem['book_title'] }}</b></h6>\n        <h6>Created on: {{ modalItem['_created'] | date: 'dd MMMM yyyy' }}</h6>\n        <br>\n        <button class=\"btn btn-sm btn-primary\" (click)=\"deleteBook(modalItem)\">Delete Anyway</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(appService, appUrls, router, activatedRoute, modalService) {
        var _this = this;
        this.appService = appService;
        this.appUrls = appUrls;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.query = { sort: '-_updated', max_results: 15, page: 1 };
        this.filter = { search: '' };
        this.books = [];
        // Optional parameters
        this.activatedRoute.queryParams.subscribe(function (parameters) {
            var where = {}, params = parameters;
            console.log(params);
            if (Object.keys(parameters).length <= 0) {
                _this.router.navigate(['/homepage'], { queryParams: _this.query });
            }
            else {
                _this.query = Object.assign({}, params);
                _this.getBooks();
            }
        });
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    HomepageComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template);
        this.modalItem = item;
    };
    HomepageComponent.prototype.getBooks = function () {
        var _this = this;
        this.books = [];
        this.appUrls.loadingIcon = true;
        this.appService.get(this.appUrls.books_list, this.query).subscribe(function (data) {
            var items = data['_items'];
            _this._meta = data['_meta'];
            _this.books = data['_items'];
            setTimeout(function () { _this.appUrls.loadingIcon = false; }, 500);
        });
    };
    HomepageComponent.prototype.pagination = function (page) {
        this.query['page'] = page;
        this.router.navigate(['/homepage'], { queryParams: this.query });
    };
    HomepageComponent.prototype.deleteBook = function (item, index) {
        var _this = this;
        this.books.splice(index, 1);
        this.appService.toast(item['book_title'], 'Deleted from Database', 's');
        this._meta['total'] = this._meta['total'] - 1;
        this.appService.delete(this.appUrls.books_list + '/' + item['_id']).subscribe(function (success) {
            console.log(success);
            _this.modalRef.hide();
        }, function (err) {
            console.log(err);
        });
    };
    HomepageComponent.prototype.searchBooks = function (search, event) {
        if (search) {
            this.query['where'] = JSON.stringify({ book_title: { $regex: '.*' + search + '.*', '$options': 'i' } });
        }
        else {
            delete this.query['where'];
        }
        this.router.navigate(['/homepage'], { queryParams: this.query });
    };
    HomepageComponent.prototype.changeParams = function (filter) {
        console.log(this.query, '-------', filter);
        this.router.navigate(['/homepage'], { queryParams: this.query });
    };
    HomepageComponent.prototype.cellClicked = function (item) {
        console.log(item['_id']);
        this.router.navigate(['/edit-book', item['_id']]);
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            constant_config_1.AppUrls,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_bootstrap_1.BsModalService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;


/***/ }),

/***/ "../../../../../src/app/joinedmembers/joinedmembers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/joinedmembers/joinedmembers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <br>\n  <h4 class=\"text-capitalize\">Joined Members</h4>\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <label>Search records</label>\n      <select class=\"form-control\" name=\"status\" id=\"status\" (change)=\"toggleStatus()\" [(ngModel)]=\"query['status']\">\n        <option value=\"{{ item['value'] }}\" *ngFor=\"let item of status\">{{ item['text'] }}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-3\">\n      <label>Sort By</label>\n      <select class=\"form-control\" name=\"status\" id=\"sort_by\" (change)=\"toggleStatus()\" [(ngModel)]=\"query['sort']\">\n        <option value=\"-_created\">Created by</option>\n        <option value=\"-_updated\">Updated by</option>\n      </select>\n    </div>\n  </div>\n  <br>\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n      <thead>\n      <tr>\n        <th>Action</th>\n        <th>First name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Status</th>\n        <th>City</th>\n        <th>Gender</th>\n        <th>Age</th>\n        <th>Registered on</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"pointer\" *ngFor=\"let item of persons; let index = index;\">\n        <td>\n          <button title=\"Make {{ item['first_name'] }} as Inactive\"\n                  (click)=\"toggleStatus('inactive', item, index)\" *ngIf=\"item['status'] === 'active'\" class=\"btn btn-xs btn-default\">\n            <span class=\"glyphicon glyphicon-ban-circle\"></span>\n          </button>\n          <button title=\"Make {{ item['first_name'] }} as Active\"\n                  (click)=\"toggleStatus('active', item, index)\" *ngIf=\"item['status'] === 'inactive'\" class=\"btn btn-xs btn-default\">\n            <span class=\"glyphicon glyphicon-ok-circle\"></span>\n          </button>\n        </td>\n        <td><a class=\"pointer\" routerLink=\"/update-person/{{ item['_id'] }}\">{{ item['first_name'] }}</a></td>\n        <td>{{ item['email'] }}</td>\n        <td>{{ item['mobile_number'] }}</td>\n        <td>{{ item['status'] }}</td>\n        <td>{{ item['city'] }}</td>\n        <td>{{ item['gender'] }}</td>\n        <td>{{ item['age'] }}</td>\n        <td>{{ item['_created'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n      </tr>\n\n      <tr *ngIf=\"!persons.length\">\n        <td colspan=\"9\" class=\"text-center\"><b>No records found!</b></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"row\" *ngIf=\"persons.length\">\n    <div class=\"col-lg-1 col-md-1\">\n      <button class=\"btn btn-xs btn-default text-center\" (click)=\"pagination(usersMeta['page'] - 1)\">\n        <span class=\"glyphicon glyphicon-backward\"></span>\n      </button>&nbsp;\n      <button (click)=\"pagination(usersMeta['page'] + 1)\" class=\"btn btn-xs btn-default text-center\">\n        <span class=\"glyphicon glyphicon-forward\"></span>\n      </button>\n    </div>\n    <div class=\"col-lg-2 col-md-2 pull-right text-right\">\n      <h6 class=\"margin-5\">Total Records: <b>{{ usersMeta['total'] }}</b></h6>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/joinedmembers/joinedmembers.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var JoinedmembersComponent = /** @class */ (function () {
    function JoinedmembersComponent(appService, appUrls, activatedRoute, router) {
        var _this = this;
        this.appService = appService;
        this.appUrls = appUrls;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersMeta = {};
        this.persons = [];
        this.filter = { search: '' };
        this.status = [{ text: 'Active', value: 'active' }, { text: 'InActive', value: 'inactive' }];
        this.query = { sort: '-_created', max_results: 15, page: 1, status: 'active' };
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.appUrls.loadingIcon = true;
            if (Object.keys(params).length <= 0) {
                _this.router.navigate(['/joined-members'], { queryParams: _this.query });
            }
            else {
                _this.query = Object.assign({}, params);
                _this.query['where'] = { status: params['status'] };
            }
            _this.getMembers();
        });
    }
    JoinedmembersComponent.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.appUrls.loadingIcon = false;
        }, 500);
    };
    JoinedmembersComponent.prototype.pagination = function (page) {
        this.query['page'] = page;
        delete this.query['where'];
        this.router.navigate(['/joined-members'], { queryParams: this.query });
    };
    JoinedmembersComponent.prototype.toggleStatus = function () {
        this.pagination(Number(this.query['page']));
    };
    JoinedmembersComponent.prototype.ngOnInit = function () { };
    JoinedmembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.persons = [];
        this.appService.get(this.appUrls.users, this.query).subscribe(function (data) {
            console.log(data);
            _this.usersMeta = data['_meta'];
            _this.persons = data['_items'];
            _this.stopLoading();
        }, function (err) {
            _this.stopLoading();
        });
    };
    JoinedmembersComponent = __decorate([
        core_1.Component({
            selector: 'app-joinedmembers',
            template: __webpack_require__("../../../../../src/app/joinedmembers/joinedmembers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/joinedmembers/joinedmembers.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            constant_config_1.AppUrls,
            router_1.ActivatedRoute,
            router_1.Router])
    ], JoinedmembersComponent);
    return JoinedmembersComponent;
}());
exports.JoinedmembersComponent = JoinedmembersComponent;


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

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-2\">\n      <div class=\"account-box\">\n        <div class=\"logo\">\n          <img src=\"http://www.ala.org/tools/sites/ala.org.tools/files/content/libfactsheets/large-librarysymbol.jpg\" alt=\"\"/>\n        </div>\n        <hr>\n        <form [formGroup]=\"lForm\" class=\"form-signin\" (submit)=\"login(lForm.value, lForm)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"pass\" placeholder=\"Password\" required />\n          </div>\n          <button class=\"btn btn-md btn-default btn-block\" type=\"submit\">\n            Sign in\n          </button>\n        </form>\n        <a class=\"forgotLnk\" routerLink=\"/forgot-password\">I can't access my account</a>\n        <!--<div class=\"or-box row-block\">\n          <div class=\"row\">\n            <div class=\"col-md-12 row-block\">\n              <a routerLink=\"/register\" class=\"btn btn-primary btn-block\">Create New Account</a>\n            </div>\n          </div>\n        </div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, appService, router, appUrls) {
        this.authService = authService;
        this.appService = appService;
        this.router = router;
        this.appUrls = appUrls;
        this.lForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('suryamuppalla@gmail.com'),
            password: new forms_1.FormControl('surya')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/homepage'], { queryParams: { page: 1, max_results: 25, sort: '-_updated' } });
        }
    };
    LoginComponent.prototype.login = function (user, lform) {
        var _this = this;
        console.log(user, lform);
        this.appService.post(this.appUrls.login, user).subscribe(function (data) {
            _this.authService.setToken(data['data']['login_token']);
            localStorage.setItem('userInfo', data['data']);
            _this.router.navigate(['/homepage']);
        }, function (err) {
            console.log(err);
            _this.appService.toast(err['error']['_error']['message'], 'Status Code: ' + err['error']['_error']['code'], 'e');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AuthService,
            app_service_module_1.AppServiceModule,
            router_1.Router,
            constant_config_1.AppUrls])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/membership/membership.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-5 {\r\n  margin-top: 5px;\r\n}\r\n.table-responsive table td, .table-responsive table th {\r\n  min-width: 130px;\r\n  font-size: 12px;\r\n}\r\n.red-alert {\r\n  color: red;\r\n}\r\nspan{\r\n  font-family: cursive;\r\n  -webkit-animation: blink 1s linear infinite;\r\n          animation: blink 1s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n  0%{opacity: 0;}\r\n  50%{opacity: .5;}\r\n  100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n  0%{opacity: 0;}\r\n  50%{opacity: .5;}\r\n  100%{opacity: 1;}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <br>\r\n  <h4 class=\"text-capitalize\">Membership Management</h4>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-2\">\r\n      <label>Filter by Status</label>\r\n      <select class=\"form-control\" name=\"status\" id=\"status\" (change)=\"toggleStatus()\" [(ngModel)]=\"query['status']\">\r\n        <option value=\"all\">All Members</option>\r\n        <option value=\"{{ item['value'] }}\" *ngFor=\"let item of bstatus\">{{ item['text'] }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-lg-2\">\r\n      <label>Membership Type</label>\r\n      <select class=\"form-control\" name=\"status\" id=\"membership_type\" (change)=\"toggleStatus()\" [(ngModel)]=\"query['membership_type']\">\r\n        <option value=\"all\">All Types</option>\r\n        <option value=\"{{ item }}\" *ngFor=\"let item of membershipTypes\">{{ item }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-lg-2\">\r\n      <label>Filter By</label>\r\n      <select class=\"form-control\" name=\"status\" id=\"sort_by\" (change)=\"toggleStatus()\" [(ngModel)]=\"query['sort']\">\r\n        <option value=\"-_created\">Created</option>\r\n        <option value=\"-_updated\">Updated</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <button (click)=\"getMembers()\" class=\"btn btn-xs btn-default pointer\">\r\n        <i class=\"glyphicon glyphicon-refresh\"></i>&nbsp;Refresh\r\n      </button>&nbsp;\r\n      <button class=\"btn btn-xs btn-default\" (click)=\"getMembers(true)\">\r\n        <i class=\"glyphicon glyphicon-user\"></i>&nbsp;All Members\r\n      </button>&nbsp;\r\n      <button class=\"btn btn-xs btn-default\" (click)=\"getMembersByExpiration()\">\r\n        <i class=\"glyphicon glyphicon-user\"></i>&nbsp;Expired members\r\n      </button>&nbsp;\r\n      <button class=\"btn btn-xs btn-default\" (click)=\"getMembersByExpiration(4)\">\r\n        <i class=\"glyphicon glyphicon-user\"></i>&nbsp;Members to Expire\r\n      </button>&nbsp;\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Action</th>\r\n          <th>First name</th>\r\n          <th>Membership Type</th>\r\n          <th>Status</th>\r\n          <th>Plan Expiry</th>\r\n          <th>No.of Books</th>\r\n          <th>Plan Balance</th>\r\n          <th>Account Balance</th>\r\n          <th>No.of Months</th>\r\n          <th>Notes</th>\r\n          <th>Created on</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr class=\"pointer\" *ngFor=\"let item of membership; let index = index;\">\r\n        <td>\r\n          <div>\r\n            <button tooltip=\"click to edit membership\" placement=\"top\"\r\n                    class=\"btn btn-xs btn-primary\" (click)=\"openModal(editTemplate, item)\">\r\n              <i class=\"glyphicon glyphicon-edit\"></i>\r\n            </button> &nbsp;\r\n            <button placement=\"top\" tooltip=\"Make Membership {{ item['status'] ? 'Inactive' : 'Active' }}!\"\r\n                    class=\"btn btn-xs btn-warning\" (click)=\"openModal(statusToggleTemplate, item)\">\r\n              <i class=\"glyphicon glyphicon-remove-sign\"></i>\r\n            </button>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <a placement=\"top\" [popover]=\"addressTemplate\" popoverTitle=\"Address details of {{ item['user_id']['first_name'] }}\"\r\n             [outsideClick]=\"true\" class=\"pointer\" (click)=\"showAddress(item['user_id'])\">{{ item['user_id']['first_name'] }}</a>\r\n        </td>\r\n        <td>{{ item['membership_type'] }}</td>\r\n        <td>{{ item['status'] ? 'Active' : 'In Active' }}</td>\r\n        <td>\r\n          <div tooltip=\"Click date to Send the notification via Email\" placement=\"top\" (click)=\"openModal(reminderTemplate, item)\"\r\n               [ngClass]=\"{'red-alert': (item['plan_expiry'] | amDifference: toDay : 'days') <= 4}\">\r\n            {{ item['plan_expiry'] | date: 'dd-MM-yyyy' }}\r\n            ({{ item['plan_expiry'] | amDifference: toDay : 'days'}})\r\n          </div>\r\n        </td>\r\n        <td>{{ item['books_at_a_time'] }}</td>\r\n        <td *ngIf=\"item['amount']\">{{ item['amount']['plan_balance'] }}</td>\r\n        <td *ngIf=\"item['amount']\">{{ item['amount']['account_balance'] }}</td>\r\n        <td>{{ item['no_of_months'] }}</td>\r\n        <td *ngIf=\"item['membership_notes']\" popover=\"{{ item['membership_notes'] }}\" placement=\"left\"\r\n            triggers=\"mouseenter:mouseleave\">\r\n          {{ getString(item['membership_notes']) }}\r\n        </td>\r\n        <td>{{ item['_created'] | date: 'dd-MMM-yyyy' }}</td>\r\n      </tr>\r\n\r\n      <tr *ngIf=\"!membership.length\">\r\n        <td colspan=\"9\" class=\"text-center\"><b>No records found!</b></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\" *ngIf=\"membership.length\">\r\n    <div class=\"col-lg-1 col-md-1\">\r\n      <button class=\"btn btn-xs btn-default text-center\" (click)=\"pagination(_meta['page'] - 1)\">\r\n        <i class=\"glyphicon glyphicon-backward\"></i>\r\n      </button>&nbsp;\r\n      <button (click)=\"pagination(_meta['page'] + 1)\" class=\"btn btn-xs btn-default text-center\">\r\n        <i class=\"glyphicon glyphicon-forward\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-2 pull-right text-right\">\r\n      <h6 class=\"margin-5\">Total Records: <b>{{ _meta['total'] }}</b></h6>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #addressTemplate>\r\n  <h5>Name: <b>{{ checkAddress['first_name'] }}</b></h5>\r\n  <p>Email: {{ checkAddress['email'] }}</p>\r\n  <p>Phone: {{ checkAddress['mobile_number'] }}</p>\r\n</ng-template>\r\n\r\n\r\n<ng-template #statusToggleTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\"><b>Membership Status change</b></h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Are you sure you want to <b>{{ modalItem['status'] ? 'In active' : 'Active' }}</b>?</h4>\r\n    <h5>Membership ID: <b>{{ modalItem['_id'] }}</b></h5>\r\n    <br><br>\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-sm btn-primary\" type=\"submit\" (click)=\"statusToggle(!modalItem['status'])\">Submit</button>&nbsp;\r\n      <button class=\"btn btn-sm btn-default\" type=\"reset\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #reminderTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\"><b>Plan Expiry reminder notification</b></h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label>User Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"modal_email\" [(ngModel)]=\"modalItem['user_id']['email']\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Plan will expire on</label>\r\n            <div class=\"form-control\" disabled readonly>\r\n              {{ modalItem['plan_expiry'] | date: 'dd-MM-yyyy' }}({{ modalItem['plan_expiry'] | amDifference: toDay : 'days'}} days)\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Notes</label>\r\n            <textarea class=\"form-control\" placeholder=\"Notes\"\r\n                      name=\"notes\" id=\"notes\" rows=\"2\" [(ngModel)]=\"modalItem['notes']\"></textarea>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"form-group\">\r\n            <button class=\"btn btn-sm btn-primary\" type=\"submit\">Send Reminder</button>&nbsp;\r\n            <button class=\"btn btn-sm btn-default\" (click)=\"modalRef.hide()\" type=\"reset\">Close</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #editTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\"><b>Edit Membership: {{ modalItem['_id'] }}</b></h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form (submit)=\"requestMembership()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center\">\r\n          <h5 class=\"text-uppercase text-center\">\r\n            <strong>{{ membershipType[readingCalculation['books']] }} </strong>Membership Selected!\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <label>No of books</label>\r\n          <select name=\"no_of_books\" (change)=\"getPriceDetails(readingCalculation)\"\r\n                  class=\"form-control\" id=\"no_of_books\" [(ngModel)]=\"readingCalculation['books']\">\r\n            <option value=\"{{ item }}\" *ngFor=\"let item of [3,6,9,12]\">{{ item }} book(s) at a time</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>No of Months</label>\r\n          <select name=\"no_of_months\" (change)=\"getPriceDetails(readingCalculation)\"\r\n                  class=\"form-control\" id=\"no_of_months\" [(ngModel)]=\"readingCalculation['months']\">\r\n            <option value=\"{{ item }}\" *ngFor=\"let item of [3,6,9,12]\">{{ item }} month(s)</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <label>Plan Balance</label>\r\n        <input type=\"number\" name=\"plan_balance\" class=\"form-control\" placeholder=\"Plan balance\"\r\n               [(ngModel)]=\"readingCalculation['totalFee']\" />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"modalItem['amount']\">\r\n        <label>Account Balance</label>\r\n        <input type=\"number\" name=\"account_balance\" class=\"form-control\" placeholder=\"Account balance\"\r\n               [(ngModel)]=\"modalItem['amount']['account_balance']\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"editstatus\">Membership Status</label>\r\n        <select class=\"form-control\" name=\"status\" id=\"editstatus\" [(ngModel)]=\"modalItem['status']\">\r\n          <option value=\"{{ item['value'] }}\" *ngFor=\"let item of bstatus\">{{ item['text'] }}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Membership notes</label>\r\n        <textarea class=\"form-control\" name=\"membership_notes\" id=\"membership_notes\" rows=\"2\"\r\n                  [(ngModel)]=\"modalItem['membership_notes']\"></textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-sm btn-primary\" type=\"submit\">Update Membership</button>&nbsp;\r\n        <button class=\"btn btn-sm btn-default\" type=\"reset\" (click)=\"modalRef.hide()\">Close</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var MembershipComponent = /** @class */ (function () {
    function MembershipComponent(appService, appUrls, activatedRoute, router, modalService) {
        var _this = this;
        this.appService = appService;
        this.appUrls = appUrls;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this._meta = {};
        this.toDay = new Date().toISOString();
        this.checkAddress = {};
        this.membership = [];
        this.membershipType = {
            '3': 'Economy reader',
            '6': 'Value reader',
            '9': 'Deluxe reader',
            '12': 'Ultimate reader'
        };
        this.readingCalculation = { books: 3, months: 3, totalFee: 0 };
        this.bstatus = [{ text: 'Active', value: true }, { text: 'In Active', value: false }];
        this.query = { sort: '-_created', max_results: 15, page: 1, membership_type: 'all' };
        this.membershipTypes = ['Economy reader', 'Value reader', 'Deluxe reader', 'Ultimate reader'];
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (Object.keys(params).length <= 0) {
                _this.router.navigate(['/membership'], { queryParams: _this.query });
            }
            else {
                _this.query = Object.assign({}, params);
                _this.query['embedded'] = { user_id: 1 };
                _this.query['where'] = { status: _this.query['status'] };
                if (_this.query['status'] === 'all') {
                    delete _this.query['where']['status'];
                }
                else {
                    _this.query['where']['status'] = params['status'] === 'true';
                }
                if (_this.query['membership_type'] === 'all') {
                    delete _this.query['where']['membership_type'];
                }
                else {
                    _this.query['where']['membership_type'] = _this.query['membership_type'];
                }
            }
            _this.getMembers();
        });
    }
    MembershipComponent.prototype.openModal = function (template, item) {
        console.log(template, item);
        this.modalRef = this.modalService.show(template);
        this.modalItem = Object.assign({}, item);
        this.readingCalculation['books'] = this.modalItem['books_at_a_time'];
        this.readingCalculation['months'] = this.modalItem['no_of_months'];
        this.readingCalculation['totalFee'] = this.modalItem['amount']['plan_balance'];
    };
    MembershipComponent.prototype.getPriceDetails = function (calcData) {
        var month = Number(calcData['months']);
        var bCount = Number(calcData['books']);
        var tFee = 800;
        if (month === 3) {
            this.readingCalculation['totalFee'] = tFee + (180 * (bCount - 1));
        }
        else if (month === 6) {
            tFee = (tFee * 2) - ((tFee * 2) / 100) * 10;
            this.readingCalculation['totalFee'] = tFee + (324 * (bCount - 1));
        }
        else if (month === 9) {
            tFee = (tFee * 3) - ((tFee * 3) / 100) * 15;
            this.readingCalculation['totalFee'] = tFee + (468 * (bCount - 1));
        }
        else if (month === 12) {
            tFee = (tFee * 4) - ((tFee * 4) / 100) * 20;
            this.readingCalculation['totalFee'] = tFee + (576 * (bCount - 1));
        }
    };
    MembershipComponent.prototype.showAddress = function (address) {
        this.checkAddress = address;
    };
    MembershipComponent.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.appUrls.loadingIcon = false;
        }, 500);
    };
    MembershipComponent.prototype.pagination = function (page) {
        this.query['page'] = page;
        delete this.query['embedded'];
        delete this.query['where'];
        this.router.navigate(['/membership'], { queryParams: this.query });
    };
    MembershipComponent.prototype.toggleStatus = function () {
        this.pagination(Number(this.query['page']));
    };
    MembershipComponent.prototype.ngOnInit = function () { };
    MembershipComponent.prototype.getString = function (text) {
        return text.substr(0, 10) + '...';
    };
    MembershipComponent.prototype.sendReminder = function (remObject) {
        console.log(remObject);
    };
    MembershipComponent.prototype.requestMembership = function () {
        var date = new Date(), books = Number(this.readingCalculation['books']), months = Number(this.readingCalculation['months']);
        var plan_expiry = new Date(date.setMonth(date.getMonth() + months)).toISOString();
        var membership = {
            books_at_a_time: books,
            no_of_months: months,
            plan_expiry: plan_expiry,
            membership_type: this.membershipType[this.readingCalculation['books']],
            amount: {
                account_balance: this.modalItem['amount']['account_balance'],
                plan_balance: this.readingCalculation['totalFee']
            },
            new_member: false,
            status: this.modalItem['status'],
            membership_notes: this.modalItem['membership_notes']
        };
        console.log(membership);
        this.updateMembership(membership);
    };
    MembershipComponent.prototype.updateMembership = function (membership) {
        var _this = this;
        this.appService.update(this.appUrls.membership + '/' + this.modalItem['_id'], membership).subscribe(function (data) {
            _this.appService.toast(_this.modalItem['_id'], 'Updated Successfully!', 's');
            _this.modalRef.hide();
            _this.getMembers();
        }, function (error) {
            _this.appService.toast('Something went wrong!', 'Please check console!', 'e');
        });
    };
    MembershipComponent.prototype.getMembersByExpiration = function (value) {
        var expiryDate = (value) ? new Date().setDate(new Date().getDate() + value) : new Date();
        var todayDate = new Date().toISOString();
        expiryDate = new Date(expiryDate).toISOString();
        if (value) {
            this.query['where']['plan_expiry'] = { '$lte': expiryDate, '$gte': this.toDay };
        }
        else {
            this.query['where']['plan_expiry'] = { '$lte': this.toDay };
        }
        this.getMembers();
    };
    MembershipComponent.prototype.statusToggle = function (status) {
        var membership = { status: status };
        this.updateMembership(membership);
    };
    MembershipComponent.prototype.getMembers = function (noQueries) {
        var _this = this;
        if (noQueries) {
            delete this.query['embedded'];
            delete this.query['where']['plan_expiry'];
        }
        this.appUrls.loadingIcon = true;
        this.membership = [];
        this.appService.get(this.appUrls.membership, this.query).subscribe(function (data) {
            console.log(data);
            _this._meta = data['_meta'];
            _this.membership = data['_items'];
            _this.stopLoading();
        }, function (err) {
            _this.stopLoading();
        });
    };
    MembershipComponent = __decorate([
        core_1.Component({
            selector: 'app-persons',
            template: __webpack_require__("../../../../../src/app/membership/membership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/membership/membership.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            constant_config_1.AppUrls,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_bootstrap_1.BsModalService])
    ], MembershipComponent);
    return MembershipComponent;
}());
exports.MembershipComponent = MembershipComponent;


/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes blinker {\r\n  from {opacity: 1.0;}\r\n  to {opacity: 0.0;}\r\n}\r\n.blink{\r\n  color: orangered !important;\r\n  font-weight: bold !important;\r\n  text-decoration: blink;\r\n  -webkit-animation-name: blinker;\r\n  -webkit-animation-duration: 0.6s;\r\n  -webkit-animation-iteration-count:infinite;\r\n  -webkit-animation-timing-function:ease-in-out;\r\n  -webkit-animation-direction: alternate;\r\n}\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n.navbar-nav.left li a {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.side-menu {\r\n  position: fixed;\r\n  width: 300px;\r\n  height: 100%;\r\n  background-color: #f8f8f8;\r\n  border-right: 1px solid #e7e7e7;\r\n}\r\n.side-menu .navbar {\r\n  border: none;\r\n}\r\n.side-menu .navbar-header {\r\n  width: 100%;\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.side-menu .navbar-nav .active a {\r\n  background-color: transparent;\r\n  margin-right: -1px;\r\n  border-right: 5px solid #e7e7e7;\r\n}\r\n.side-menu .navbar-nav li {\r\n  display: block;\r\n  width: 100%;\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.side-menu .navbar-nav li a {\r\n  padding: 15px;\r\n}\r\n.side-menu .navbar-nav li a .glyphicon {\r\n  padding-right: 10px;\r\n}\r\n.side-menu #dropdown {\r\n  border: 0;\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.side-menu #dropdown .caret {\r\n  float: right;\r\n  margin: 9px 5px 0;\r\n}\r\n.side-menu #dropdown .indicator {\r\n  float: right;\r\n}\r\n.side-menu #dropdown > a {\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.side-menu #dropdown .panel-body {\r\n  padding: 0;\r\n  background-color: #f3f3f3;\r\n}\r\n.side-menu #dropdown .panel-body .navbar-nav {\r\n  width: 100%;\r\n}\r\n.side-menu #dropdown .panel-body .navbar-nav li {\r\n  padding-left: 15px;\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.side-menu #dropdown .panel-body .navbar-nav li:last-child {\r\n  border-bottom: none;\r\n}\r\n.side-menu #dropdown .panel-body .panel > a {\r\n  margin-left: -20px;\r\n  padding-left: 35px;\r\n}\r\n.side-menu #dropdown .panel-body .panel-body {\r\n  margin-left: -15px;\r\n}\r\n.side-menu #dropdown .panel-body .panel-body li {\r\n  padding-left: 30px;\r\n}\r\n.side-menu #dropdown .panel-body .panel-body li:last-child {\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.side-menu #search-trigger {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  border-radius: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 15px 18px;\r\n}\r\n.side-menu .brand-name-wrapper {\r\n  min-height: 50px;\r\n}\r\n.side-menu .brand-name-wrapper .navbar-brand {\r\n  display: block;\r\n}\r\n.side-menu #search {\r\n  position: relative;\r\n  z-index: 1000;\r\n}\r\n.side-menu #search .panel-body {\r\n  padding: 0;\r\n}\r\n.side-menu #search .panel-body .navbar-form {\r\n  padding: 0;\r\n  padding-right: 50px;\r\n  width: 100%;\r\n  margin: 0;\r\n  position: relative;\r\n  border-top: 1px solid #e7e7e7;\r\n}\r\n.side-menu #search .panel-body .navbar-form .form-group {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.side-menu #search .panel-body .navbar-form input {\r\n  border: 0;\r\n  border-radius: 0;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n.side-menu #search .panel-body .navbar-form .btn {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  border: 0;\r\n  border-radius: 0;\r\n  background-color: #f3f3f3;\r\n  padding: 15px 18px;\r\n}\r\n/* Main body section */\r\n.side-body {\r\n  margin-left: 310px;\r\n}\r\n/* small screen */\r\n@media (max-width: 768px) {\r\n  .side-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    border-right: 0;\r\n    border-bottom: 1px solid #e7e7e7;\r\n  }\r\n  .side-menu .brand-name-wrapper .navbar-brand {\r\n    display: inline-block;\r\n  }\r\n  /* Slide in animation */\r\n  @-webkit-keyframes slidein {\r\n    0% {\r\n      left: -300px;\r\n    }\r\n    100% {\r\n      left: 10px;\r\n    }\r\n  }\r\n  @keyframes slidein {\r\n    0% {\r\n      left: -300px;\r\n    }\r\n    100% {\r\n      left: 10px;\r\n    }\r\n  }\r\n  @-webkit-keyframes slideout {\r\n    0% {\r\n      left: 0;\r\n    }\r\n    100% {\r\n      left: -300px;\r\n    }\r\n  }\r\n  @keyframes slideout {\r\n    0% {\r\n      left: 0;\r\n    }\r\n    100% {\r\n      left: -300px;\r\n    }\r\n  }\r\n  /* Slide side menu*/\r\n  /* Add .absolute-wrapper.slide-in for scrollable menu -> see top comment */\r\n  .side-menu-container > .navbar-nav.slide-in {\r\n    -webkit-animation: slidein 300ms forwards;\r\n    animation: slidein 300ms forwards;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n  }\r\n  .side-menu-container > .navbar-nav {\r\n    /* Add position:absolute for scrollable menu -> see top comment */\r\n    position: fixed;\r\n    left: -300px;\r\n    width: 300px;\r\n    top: 43px;\r\n    height: 100%;\r\n    border-right: 1px solid #e7e7e7;\r\n    background-color: #f8f8f8;\r\n    -webkit-animation: slideout 300ms forwards;\r\n    animation: slideout 300ms forwards;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n  }\r\n  /* Uncomment for scrollable menu -> see top comment */\r\n  /*.absolute-wrapper{\r\n        width:285px;\r\n        -moz-animation: slideout 300ms forwards;\r\n        -o-animation: slideout 300ms forwards;\r\n        -webkit-animation: slideout 300ms forwards;\r\n        animation: slideout 300ms forwards;\r\n        -webkit-transform-style: preserve-3d;\r\n        transform-style: preserve-3d;\r\n    }*/\r\n  @-webkit-keyframes bodyslidein {\r\n    0% {\r\n      left: 0;\r\n    }\r\n    100% {\r\n      left: 300px;\r\n    }\r\n  }\r\n  @keyframes bodyslidein {\r\n    0% {\r\n      left: 0;\r\n    }\r\n    100% {\r\n      left: 300px;\r\n    }\r\n  }\r\n  @-webkit-keyframes bodyslideout {\r\n    0% {\r\n      left: 300px;\r\n    }\r\n    100% {\r\n      left: 0;\r\n    }\r\n  }\r\n  @keyframes bodyslideout {\r\n    0% {\r\n      left: 300px;\r\n    }\r\n    100% {\r\n      left: 0;\r\n    }\r\n  }\r\n  /* Slide side body*/\r\n  .side-body {\r\n    margin-left: 5px;\r\n    margin-top: 70px;\r\n    position: relative;\r\n    -webkit-animation: bodyslideout 300ms forwards;\r\n    animation: bodyslideout 300ms forwards;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n  }\r\n  .body-slide-in {\r\n    -webkit-animation: bodyslidein 300ms forwards;\r\n    animation: bodyslidein 300ms forwards;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n  }\r\n  /* Hamburger */\r\n  .navbar-toggle {\r\n    border: 0;\r\n    float: left;\r\n    padding: 18px;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    background-color: #f3f3f3;\r\n  }\r\n  /* Search */\r\n  #search .panel-body .navbar-form {\r\n    border-bottom: 0;\r\n  }\r\n  #search .panel-body .navbar-form .form-group {\r\n    margin: 0;\r\n  }\r\n  .navbar-header {\r\n    /* this is probably redundant */\r\n    position: fixed;\r\n    z-index: 3;\r\n    background-color: #f8f8f8;\r\n  }\r\n  /* Dropdown tweek */\r\n  #dropdown .panel-body .navbar-nav {\r\n    margin: 0;\r\n  }\r\n}\r\n/*------------------- Loading icon css -----------------*/\r\n.loading {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #ffffff61;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.lds-roller {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-roller div {\r\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  -webkit-transform-origin: 32px 32px;\r\n          transform-origin: 32px 32px;\r\n}\r\n.lds-roller div:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background: #000000;\r\n  margin: -3px 0 0 -3px;\r\n}\r\n.lds-roller div:nth-child(1) {\r\n  -webkit-animation-delay: -0.036s;\r\n          animation-delay: -0.036s;\r\n}\r\n.lds-roller div:nth-child(1):after {\r\n  top: 50px;\r\n  left: 50px;\r\n}\r\n.lds-roller div:nth-child(2) {\r\n  -webkit-animation-delay: -0.072s;\r\n          animation-delay: -0.072s;\r\n}\r\n.lds-roller div:nth-child(2):after {\r\n  top: 54px;\r\n  left: 45px;\r\n}\r\n.lds-roller div:nth-child(3) {\r\n  -webkit-animation-delay: -0.108s;\r\n          animation-delay: -0.108s;\r\n}\r\n.lds-roller div:nth-child(3):after {\r\n  top: 57px;\r\n  left: 39px;\r\n}\r\n.lds-roller div:nth-child(4) {\r\n  -webkit-animation-delay: -0.144s;\r\n          animation-delay: -0.144s;\r\n}\r\n.lds-roller div:nth-child(4):after {\r\n  top: 58px;\r\n  left: 32px;\r\n}\r\n.lds-roller div:nth-child(5) {\r\n  -webkit-animation-delay: -0.18s;\r\n          animation-delay: -0.18s;\r\n}\r\n.lds-roller div:nth-child(5):after {\r\n  top: 57px;\r\n  left: 25px;\r\n}\r\n.lds-roller div:nth-child(6) {\r\n  -webkit-animation-delay: -0.216s;\r\n          animation-delay: -0.216s;\r\n}\r\n.lds-roller div:nth-child(6):after {\r\n  top: 54px;\r\n  left: 19px;\r\n}\r\n.lds-roller div:nth-child(7) {\r\n  -webkit-animation-delay: -0.252s;\r\n          animation-delay: -0.252s;\r\n}\r\n.lds-roller div:nth-child(7):after {\r\n  top: 50px;\r\n  left: 14px;\r\n}\r\n.lds-roller div:nth-child(8) {\r\n  -webkit-animation-delay: -0.288s;\r\n          animation-delay: -0.288s;\r\n}\r\n.lds-roller div:nth-child(8):after {\r\n  top: 45px;\r\n  left: 10px;\r\n}\r\n@-webkit-keyframes lds-roller {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-roller {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n/* -------------------- Loading end --------------------*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"side-menu\" *ngIf=\"authService.isAuthenticated()\">\n\n  <nav class=\"navbar navbar-default\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <div class=\"brand-wrapper\">\n        <!-- Hamburger -->\n        <button type=\"button\" class=\"navbar-toggle\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n        <!-- Brand -->\n        <div class=\"brand-name-wrapper\">\n          <a class=\"navbar-brand\" routerLink=\"/homepage\"\n             [queryParams]=\"{page: 1, max_results: 15, sort: '-_updated'}\">\n            Brand\n          </a>\n        </div>\n\n        <!-- Search -->\n        <a data-toggle=\"collapse\" href=\"#search\" class=\"btn btn-default\" id=\"search-trigger\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n\n        <!-- Search body -->\n        <div id=\"search\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n            <ul class=\"nav navbar-nav\">\n              <li routerLinkActive=\"active\">\n                <a>\n                  <span class=\"glyphicon glyphicon-grain\"></span> Settings\n                </a>\n              </li>\n              <li>\n                <a (click)=\"logout()\">\n                  <span class=\"glyphicon glyphicon-log-out\"></span> Logout\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Main Menu -->\n    <div class=\"side-menu-container\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/book-catelog\">\n            <span class=\"glyphicon glyphicon-book\"></span> Book Data Entry\n          </a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/homepage\"\n             [queryParams]=\"{page: 1, max_results: 15, sort: '-_updated'}\">\n            <span class=\"glyphicon glyphicon-send\"></span> Books\n          </a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/categories\"><span class=\"glyphicon glyphicon-plane\"></span> Categories</a>\n        </li>\n        <li class=\"panel panel-default\" id=\"dropdown\">\n          <a data-toggle=\"collapse\" href=\"#dropdown-lvl1\">\n            <span class=\"glyphicon glyphicon-user\"></span> Members Management <span class=\"caret\"></span>\n          </a>\n          <div id=\"dropdown-lvl1\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              <ul class=\"nav navbar-nav\">\n                <li>\n                  <a routerLink=\"/membership\"\n                     [queryParams]=\"{max_results: 15, page: 1, sort: '-_created', status: 'all', membership_type: 'all'}\">\n                    Paid Members\n                  </a>\n                </li>\n                <li>\n                  <a routerLink=\"/joined-members\" [queryParams]=\"{max_results: 15, page: 1, sort: '-_created', status: 'active'}\">\n                    Joined Members\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/orders\"><span class=\"glyphicon glyphicon-signal\"></span> Sales logistics</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n</div>\n<!-- Main Content -->\n<div class=\"container-fluid\">\n  <div class=\"side-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div class=\"loading\" *ngIf=\"appUrls && appUrls['loadingIcon']\">\n  <div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(appService, authService, appUrls, route) {
        this.appService = appService;
        this.authService = authService;
        this.appUrls = appUrls;
        this.route = route;
        this.user = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            // check user is logged in or not from the server
            var token = this.authService.getToken('access_token');
            this.appService.get(this.appUrls.me, { login_token: token }).subscribe(function (data) {
                console.log(data);
                _this.user = data['data'];
                _this.appService.updateUser(data['data']);
            }, function (err) {
                _this.logout();
            });
        }
    };
    NavbarComponent.prototype.logout = function () {
        var lToken = this.authService.getToken('access_token');
        this.appService.get(this.appUrls['logout'], { login_token: lToken })
            .subscribe(function (data) { }, function (err) { });
        this.authService.removeToken();
        this.route.navigate(['/login']);
        this.appService.updateUser({});
        this.appService.toast('Successfully logged out', '', 's');
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            app_service_module_1.AuthService,
            constant_config_1.AppUrls,
            router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tr th:nth-child(3), table tr td:nth-child(3) {\r\n  min-width: 60px !important;\r\n}\r\ntable tr td p {\r\n  margin-bottom: 0;\r\n}\r\ntable tr td, table tr td p {\r\n  font-size: 13px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <h5><b>Sales logistics</b></h5>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3\">\n      <label>Sort by</label>\n      <select name=\"sort\" id=\"sort\" class=\"form-control\" [(ngModel)]=\"query['sort']\" (change)=\"changeParams(query)\">\n        <option value=\"-_updated\">Updated on</option>\n        <option value=\"-_created\">Created on</option>\n      </select>\n    </div>\n    <div class=\"col-lg-2 col-md-2\">\n      <label for=\"max_results\">Results per page</label>\n      <select name=\"max_results\" id=\"max_results\" class=\"form-control\"\n              [(ngModel)]=\"query.max_results\" (change)=\"changeParams(query)\">\n        <option value=\"15\">15</option>\n        <option value=\"30\">30</option>\n        <option value=\"50\">50</option>\n        <option value=\"100\">100</option>\n        <option value=\"150\">150</option>\n      </select>\n    </div>\n  </div>\n  <hr>\n  <!-- table stands -->\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Order Id</th>\n          <th>Ordered Books </th>\n          <th>Ordered Date</th>\n          <th>Delivery Date</th>\n          <th>Delivery Status</th>\n          <th>Customer</th>\n          <!--<th>Transaction ID</th>-->\n          <th>Shipping Address</th>\n          <th>Amount Paid</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of orders\" class=\"pointer\">\n          <td>\n            <button title=\"View {{ item['_id'] }}\" (click)=\"openModal(viewTemplate, item)\" class=\"btn btn-xs btn-default\">\n              <span class=\"glyphicon glyphicon-eye-open\"></span>\n            </button>\n            <button title=\"Update {{ item['_id'] }}\" (click)=\"openModal(editTemplate, item)\" class=\"btn btn-xs btn-default\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </button>\n          </td>\n          <td>{{ item['_id'] }}</td>\n          <td>{{ item['books'].length }}</td>\n          <td>{{ item['_created'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n          <td>{{ item['delivery_date'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n          <td>{{ item['delivery_status'] }}</td>\n          <td popover=\"Mobile number: {{ item['user_id']['mobile_number'] }}\"\n              triggers=\"mouseenter:mouseleave\">{{ item['user_id']['first_name'] }}, {{ item['user_id']['last_name'] }}</td>\n          <!--<td>{{ item['transaction_id'] }}</td>-->\n          <td>\n            <a placement=\"top\" [popover]=\"addressTemplate\" popoverTitle=\"Address details of {{ item['user_id']['first_name'] }}\"\n               [outsideClick]=\"true\" (click)=\"showAddress(item['shipping_address'])\">Address details</a>\n          </td>\n          <td>Rs. {{ item['total_amount'] }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<ng-template #addressTemplate>\n  <h5><b>{{ checkAddress['name'] }}</b></h5>\n  <p>{{ checkAddress['phone_number'] }}</p>\n  <p>{{ checkAddress['address'] }}</p>\n  <p>{{ checkAddress['city'] }}, {{ checkAddress['state'] }}</p>\n  <p>{{ checkAddress['pin_code'] }}</p>\n</ng-template>\n\n<ng-template #viewTemplate>\n  <div class=\"modal-header\" *ngIf=\"modalItem\">\n    <h5 class=\"modal-title pull-left\">Order ID : {{ modalItem['_id'] }}</h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"modalItem\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-bordered\">\n            <tbody>\n            <tr>\n              <td>Order ID</td>\n              <td>{{ modalItem['_id'] }}</td>\n            </tr>\n            <tr *ngIf=\"modalItem['user_id']\">\n              <td>Customer</td>\n              <td>\n                <p>{{ modalItem['user_id']['first_name'] }}, {{ modalItem['user_id']['last_name'] }}</p>\n                <p>Email: {{ modalItem['user_id']['email'] }}, Phone: {{ modalItem['user_id']['mobile_number'] }}</p>\n              </td>\n            </tr>\n            <tr *ngIf=\"modalItem['books']\">\n              <td>\n                Ordered Books <strong>({{ modalItem['books'].length }})</strong>\n              </td>\n              <td>\n                <p *ngFor=\"let book of modalItem['books']\">\n                  <a target=\"_blank\"\n                     href=\"{{ appUrls.custUrl + 'book_details/' + parseTitle(book.book_title) + '/' + book.ISBN_13}}\">\n                    {{ book['book_title'] }}\n                  </a>\n                </p>\n              </td>\n            </tr>\n            <tr>\n              <td>Ordered Date</td>\n              <td>{{ modalItem['_created'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n            </tr>\n            <tr>\n              <td>Delivery Date</td>\n              <td>{{ modalItem['delivery_date'] | date: 'dd/MM/yyyy hh:mm a' }}</td>\n            </tr>\n            <tr>\n              <td>Delivery Status</td>\n              <td>{{ modalItem['delivery_status'] }}</td>\n            </tr>\n            <tr>\n              <td>Shipping Address</td>\n              <td *ngIf=\"modalItem['shipping_address']\">\n                <h5><b>{{ modalItem['shipping_address']['name'] }}</b></h5>\n                <p>{{ modalItem['shipping_address']['phone_number'] }}</p>\n                <p>{{ modalItem['shipping_address']['address'] }}</p>\n                <p>{{ modalItem['shipping_address']['city'] }}, {{ modalItem['shipping_address']['state'] }}</p>\n                <p>{{ modalItem['shipping_address']['pin_code'] }}</p>\n              </td>\n            </tr>\n            <tr>\n              <td>Amount paid</td>\n              <td><b>Rs. {{ modalItem['total_amount'] }}</b></td>\n            </tr>\n            <tr>\n              <td>Notes</td>\n              <td>{{ modalItem['notes'] }}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n\n<ng-template #editTemplate>\n  <div class=\"modal-header\" *ngIf=\"modalItem\">\n    <h4 class=\"modal-title pull-left\">Order ID : {{ modalItem['_id'] }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"modalItem\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <form (submit)=\"updateOrder(modalItem)\" name=\"update_order\">\n          <div class=\"form-group\">\n            <label>Delivery Status</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Delivery status\"\n                   name=\"delivery_status\" [(ngModel)]=\"modalItem['delivery_status']\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"notes\">Notes</label>\n            <textarea name=\"notes\" id=\"notes\" rows=\"4\" class=\"form-control\"\n                      [(ngModel)]=\"modalItem['notes']\" placeholder=\"Notes\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(appService, router, appUrls, activatedRoute, modalService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.appUrls = appUrls;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.embedded = { user_id: 1 };
        this.query = {
            sort: '-_created', page: 1, max_results: 15,
            embedded: JSON.stringify(this.embedded)
        };
        this.orders = [];
        this._meta = {};
        this.checkAddress = {};
        this.activatedRoute.queryParams.subscribe(function (parameters) {
            var where = {}, params = parameters;
            console.log(params);
            if (Object.keys(parameters).length === 0) {
                _this.router.navigate(['/orders'], { queryParams: _this.query });
            }
            else {
                _this.query = Object.assign({}, params);
                _this.getOrders();
            }
        });
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent.prototype.parseTitle = function (title) {
        return title.replace(/\//g, '').replace(/ /g, '-');
    };
    OrdersComponent.prototype.openModal = function (template, item) {
        var _this = this;
        this.modalRef = this.modalService.show(template);
        var query = { embedded: { user_id: 1, books: { book_id: 1 } } };
        this.appService.get(this.appUrls.orders + '/' + item['_id'], query)
            .subscribe(function (data) {
            console.log(data);
            _this.modalItem = data;
        }, function (err) {
            console.log(err);
        });
    };
    OrdersComponent.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.appUrls.loadingIcon = false;
        }, 500);
    };
    OrdersComponent.prototype.changeParams = function (filter) {
        console.log(this.query, '-------', filter);
        this.router.navigate(['/orders'], { queryParams: this.query });
    };
    OrdersComponent.prototype.showAddress = function (address) {
        this.checkAddress = address;
    };
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.appUrls.loadingIcon = true;
        this.appService.get(this.appUrls.orders, this.query).subscribe(function (data) {
            console.log(data);
            _this.orders = data['_items'];
            _this._meta = data['_meta'];
            _this.stopLoading();
        }, function (err) {
            console.log(err);
            _this.stopLoading();
        });
    };
    OrdersComponent.prototype.updateOrder = function (order) {
        var _this = this;
        console.log(order);
        var object = { notes: order['notes'], delivery_status: order['delivery_status'] };
        this.appService.update(this.appUrls.orders + '/' + order['_id'], object)
            .subscribe(function (data) {
            _this.appService.toast(order['_id'], 'Successfully Updated!', 's');
            _this.modalRef.hide();
        }, function (err) {
            console.log(err);
        });
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            router_1.Router,
            constant_config_1.AppUrls,
            router_1.ActivatedRoute,
            ngx_bootstrap_1.BsModalService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;


/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-isbn {\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\n.image-preview {\r\n  height: 150px;\r\n  width: 150px;\r\n  border: 1px solid #DDDDDD;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 5px;\r\n  position: relative;\r\n}\r\n.image-preview span {\r\n  position: absolute;\r\n  top: -7px;\r\n  right: -7px;\r\n  background: #ddd;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 22px;\r\n  cursor: pointer;\r\n}\r\n.image-preview img {\r\n  height: auto;\r\n  max-height: 100%;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <h3>Book Data Entry with ISBN number</h3>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <form (submit)=\"getBookDetails(isbnSearch)\" >\r\n        <div class=\"form-group\">\r\n          <input id=\"isbnInput\" onClick=\"javascript:this.form.isbn.select();\" type=\"text\"\r\n                  class=\"form-control\" placeholder=\"Enter ISBN number\"\r\n                  name=\"isbn\" [(ngModel)]=\"isbnSearch\" required=\"required\" autocomplete=\"off\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-default btn-sm\">Get Details</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n  <form [formGroup]=\"bookForm\" (submit)=\"postBookDetails(bookForm.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Book Title</label>\r\n          <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Book title\"\r\n                 formControlName=\"book_title\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"sub_title\">Sub Title</label>\r\n          <input type=\"text\" id=\"sub_title\" class=\"form-control\" placeholder=\"Sub title\"\r\n                 formControlName=\"sub_title\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"summary\">Book Summary</label>\r\n          <textarea type=\"text\" id=\"summary\" class=\"form-control\" placeholder=\"Book Summary\"\r\n                    formControlName=\"book_summary\" rows=\"2\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"keywords\">Book Keywords</label>\r\n          <textarea type=\"text\" id=\"keywords\" class=\"form-control\" placeholder=\"Book keywords\"\r\n                    formControlName=\"book_keywords\" rows=\"2\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"pages\">No.of Pages</label>\r\n          <input type=\"text\" id=\"pages\" class=\"form-control\" placeholder=\"No.of Pages\"\r\n                 formControlName=\"no_of_pages\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"Author\">Authors</label>\r\n          <input type=\"text\" id=\"Author\" class=\"form-control\" placeholder=\"Author\" formControlName=\"book_authors\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"book_author_desc\">Book Author Description</label>\r\n          <textarea formControlName=\"book_author_desc\" id=\"book_author_desc\" rows=\"2\"\r\n                    placeholder=\"Book Author Description\" class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Availability\">Availability</label>\r\n          <select formControlName=\"availability\" id=\"Availability\" class=\"form-control\">\r\n            <option *ngFor=\"let av of trueFalseArray\" value=\"{{ av.val }}\">{{ av.text }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"hcopy_price\">Hard copy Price</label>\r\n          <input type=\"number\" id=\"hcopy_price\" class=\"form-control\"\r\n                 placeholder=\"Hard copy Price\" formControlName=\"hcopy_price\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"book_image\">Book Image</label>\r\n          <input type=\"file\" (change)=\"fileChangeEvent($event)\" #imageUpload id=\"book_image\"\r\n                 class=\"form-control\" placeholder=\"Book Image\" required />\r\n        </div>\r\n\r\n        <div class=\"form-group image-preview\" *ngIf=\"imagePreview['src']\">\r\n          <img src=\"{{ imagePreview.src }}\" alt=\"{{ imagePreview.title }}\">\r\n          <span *ngIf=\"imageInput.nativeElement.value\" (click)=\"removeImage()\">\r\n            <i class=\"glyphicon glyphicon-remove\"></i>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"m_group\">Book Category</label>\r\n          <select name=\"m_group\" id=\"m_group\" formControlName=\"book_categories\" class=\"form-control\">\r\n            <option *ngFor=\"let item of categories\" value=\"{{ item._id }}\">{{ item.category_name }}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"language\">Language</label>\r\n          <select formControlName=\"language\" id=\"language\" class=\"form-control\">\r\n            <option *ngFor=\"let av of languages\" value=\"{{ av.val }}\">{{ av.text }}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"publisher\">Publisher</label>\r\n          <input type=\"text\" id=\"publisher\" class=\"form-control\" placeholder=\"Publisher\" formControlName=\"publisher\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ISBN\">ISBN 10</label>\r\n          <input type=\"text\" id=\"ISBN\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_10\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"ISBN_13\">ISBN 13</label>\r\n          <input type=\"text\" id=\"ISBN_13\" class=\"form-control\" placeholder=\"ISBN\" formControlName=\"ISBN_13\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"published_date\">Published date</label>\r\n          <!--<input type=\"text\" id=\"published_date\" class=\"form-control\" placeholder=\"Published date\"\r\n                 formControlName=\"published_date\" />-->\r\n          <input type=\"text\" required id=\"published_date\" placeholder=\"Published date\" class=\"form-control\" bsDatepicker\r\n            formControlName=\"published_date\" />\r\n        </div>\r\n\r\n      </div> <!-- end col -->\r\n      <div class=\"col-lg-4\">\r\n        <div formGroupName=\"no_of_copies\">\r\n          <div class=\"form-group\">\r\n            <label>No.of Copies In Store</label>\r\n            <input type=\"number\" class=\"form-control\" minlength=\"1\" formControlName=\"instore\" placeholder=\"No.of Copies\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>No.of Copies Outside</label>\r\n            <input type=\"number\" class=\"form-control\" maxlength=\"1\" formControlName=\"outstore\" placeholder=\"No.of Copies\">\r\n          </div>\r\n        </div>\r\n        <h5 class=\"text-uppercase\" style=\"color: orangered;\"><b>Do you have E-Book?</b></h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"e-book\">E-Book</label>\r\n          <input type=\"file\"  (change)=\"eBookChangeEvent($event)\" #eBookUpload class=\"form-control\"\r\n                 placeholder=\"E-book\" id=\"e-book\" />\r\n        </div>\r\n        <div class=\"panel panel-default\" *ngIf=\"eBookInput.nativeElement.value\">\r\n          <div class=\"panel-body\">\r\n            <h5>File name: <b>{{ ebookPreview['title'] }}</b></h5>\r\n            <h6><a class=\"pointer\" (click)=\"removeEBook()\">Remove</a></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"eBookInput.nativeElement.value\">\r\n          <label for=\"ecopy_price\">E-copy Price</label>\r\n          <input type=\"number\" id=\"ecopy_price\" class=\"form-control\"\r\n                 placeholder=\"E-copy Price\" formControlName=\"ecopy_price\" />\r\n        </div>\r\n      </div> <!-- end col -->\r\n    </div> <!-- end row -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\">Publish</button>\r\n        <button class=\"btn-default btn-sm btn\" type=\"reset\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/publish-book/publish-book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PublishBookComponent = /** @class */ (function () {
    function PublishBookComponent(appService, langs, appUrls, router) {
        this.appService = appService;
        this.langs = langs;
        this.appUrls = appUrls;
        this.router = router;
        this.bookInfo = {};
        this.googleBookInfo = {};
        this.categories = [];
        this.imagePreview = {};
        this.ebookPreview = {};
        this.bookForm = new forms_1.FormGroup({
            book_title: new forms_1.FormControl('', forms_1.Validators.required),
            sub_title: new forms_1.FormControl(''),
            book_summary: new forms_1.FormControl(),
            book_keywords: new forms_1.FormControl(),
            no_of_pages: new forms_1.FormControl('', forms_1.Validators.required),
            book_authors: new forms_1.FormControl('', forms_1.Validators.required),
            book_author_desc: new forms_1.FormControl(),
            availability: new forms_1.FormControl(true),
            hcopy_price: new forms_1.FormControl(0, forms_1.Validators.required),
            ecopy_price: new forms_1.FormControl(0, forms_1.Validators.required),
            book_categories: new forms_1.FormControl('', forms_1.Validators.required),
            language: new forms_1.FormControl('', forms_1.Validators.required),
            publisher: new forms_1.FormControl('', forms_1.Validators.required),
            ISBN_10: new forms_1.FormControl('', forms_1.Validators.required),
            ISBN_13: new forms_1.FormControl('', forms_1.Validators.required),
            published_date: new forms_1.FormControl('', forms_1.Validators.required),
            image_small_thumbnail: new forms_1.FormControl('', forms_1.Validators.required),
            image_thumbnail: new forms_1.FormControl('', forms_1.Validators.required),
            no_of_copies: new forms_1.FormGroup({
                outstore: new forms_1.FormControl(0, forms_1.Validators.required),
                instore: new forms_1.FormControl(1, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(1)]))
            })
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
        this.appUrls.loadingIcon = true;
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
                _this.bookInfo['published_date'] = new Date(_this.googleBookInfo['publishedDate']).toLocaleString().split(',')[0];
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
                _this.stopLoading();
            }
        }, function (err) {
            console.log(err);
            _this.stopLoading();
        });
    };
    PublishBookComponent.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.appUrls.loadingIcon = false;
        }, 500);
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
    PublishBookComponent.prototype.removeImage = function () {
        this.imageInput.nativeElement.value = '';
        this.imagePreview = {};
    };
    PublishBookComponent.prototype.eBookChangeEvent = function (event) {
        var _this = this;
        var file = this.eBookInput.nativeElement['files'][0];
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e, file);
            _this.ebookPreview = {
                src: e.target.result,
                title: file['name']
            };
        };
        reader.readAsDataURL(this.eBookInput.nativeElement['files'][0]);
    };
    PublishBookComponent.prototype.removeEBook = function () {
        this.ebookPreview = {};
        this.eBookInput.nativeElement.value = '';
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
        var _this = this;
        bookForm['book_categories'] = [bookForm['book_categories']];
        this.appService.post(this.appUrls.books_list, bookForm).subscribe(function (data) {
            console.log(data);
            _this.appService.toast(bookForm['book_title'], 'Successfully added in Database', 's');
            _this.router.navigate(['/homepage']);
            _this.stopLoading();
        }, function (err) {
            console.log(err);
            _this.stopLoading();
        });
    };
    PublishBookComponent.prototype.checkEBookUpload = function (bookForm) {
        var _this = this;
        if (this.eBookInput.nativeElement.value) {
            var formData = new FormData();
            formData.append('file', this.eBookInput.nativeElement['files'][0]);
            this.appService.post(this.appUrls.upload_file, formData, true).subscribe(function (data) {
                if (data && data['data']) {
                    bookForm['ebook'] = data['data']['path'];
                }
                _this.postBook(bookForm);
            }, function (err) {
                console.log(err);
                _this.stopLoading();
            });
        }
        else {
            this.postBook(bookForm);
        }
    };
    PublishBookComponent.prototype.postBookDetails = function (bookForm) {
        var _this = this;
        this.appUrls.loadingIcon = true;
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
                _this.checkEBookUpload(bookForm);
            }, function (err) {
                console.log(err);
                _this.stopLoading();
            });
        }
        else {
            this.checkEBookUpload(bookForm);
        }
    };
    __decorate([
        core_1.ViewChild('imageUpload'),
        __metadata("design:type", core_1.ElementRef)
    ], PublishBookComponent.prototype, "imageInput", void 0);
    __decorate([
        core_1.ViewChild('eBookUpload'),
        __metadata("design:type", core_1.ElementRef)
    ], PublishBookComponent.prototype, "eBookInput", void 0);
    PublishBookComponent = __decorate([
        core_1.Component({
            selector: 'app-publish-book',
            template: __webpack_require__("../../../../../src/app/publish-book/publish-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/publish-book/publish-book.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_module_1.AppServiceModule,
            app_service_module_1.Languages,
            constant_config_1.AppUrls,
            router_1.Router])
    ], PublishBookComponent);
    return PublishBookComponent;
}());
exports.PublishBookComponent = PublishBookComponent;


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

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-2\">\n      <div class=\"account-box\">\n        <div class=\"logo\">\n          <img src=\"http://www.ala.org/tools/sites/ala.org.tools/files/content/libfactsheets/large-librarysymbol.jpg\" alt=\"\"/>\n        </div>\n        <hr>\n        <form class=\"form-signin\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"checkbox\" value=\"remember-me\" />\n            Keep me signed in\n          </div>\n          <button class=\"btn btn-md btn-default btn-block\" type=\"submit\">\n            Register Now\n          </button>\n        </form>\n        <div class=\"or-box row-block\">\n          <div class=\"row\">\n            <div class=\"col-md-12 row-block\">\n              <a routerLink=\"/login\" class=\"btn btn-primary btn-block\">Login Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/shared/app.service.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var AppServiceModule = /** @class */ (function () {
    function AppServiceModule(httpClient) {
        this.httpClient = httpClient;
        this.CurrentUser = new BehaviorSubject_1.BehaviorSubject({});
        this.userCast = this.CurrentUser.asObservable();
        this.options = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    AppServiceModule.prototype.get = function (url, parameters) {
        console.log('get URL -----', url);
        var params;
        // Setup log namespace query parameter
        params = new http_1.HttpParams();
        params = params.set('rand', Math.random());
        if (parameters) {
            for (var key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    if (typeof parameters[key] === 'object') {
                        params = params.set(key, JSON.stringify(parameters[key]));
                    }
                    else {
                        params = params.set(key, parameters[key]);
                    }
                }
            }
        }
        console.log('my params: ', params, parameters);
        return this.httpClient.get(url, { params: params });
    };
    AppServiceModule.prototype.post = function (url, data, noHeaders) {
        this.options = (noHeaders) ? new Headers({ 'Content-Type': undefined }) : this.options;
        console.log(this.options);
        return this.httpClient.post(url, data, this.options);
    };
    AppServiceModule.prototype.update = function (url, data) {
        return this.httpClient.patch(url, data, this.options);
    };
    AppServiceModule.prototype.delete = function (url) {
        return this.httpClient.delete(url, this.options);
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
    AppServiceModule.prototype.updateUser = function (value) {
        this.CurrentUser.next(value);
    };
    AppServiceModule.prototype.datesDifference = function (from, to) {
        var date2 = new Date(from);
        var date1 = new Date(to);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };
    AppServiceModule = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppServiceModule);
    return AppServiceModule;
}());
exports.AppServiceModule = AppServiceModule;
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // ...
    AuthService.prototype.getToken = function (token) {
        return localStorage.getItem(token);
    };
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [AuthService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Languages);
    return Languages;
}());
exports.Languages = Languages;


/***/ }),

/***/ "../../../../../src/app/updatepersons/updatepersons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/updatepersons/updatepersons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <br>\n  <h4><b>Quick Actions on</b></h4>\n  <div class=\"row\" *ngIf=\"myUser && membership\">\n    <div class=\"col-lg-6 col-md-6\">\n      <button class=\"btn btn-sm btn-warning\" (click)=\"makeInactive(myParams)\">\n        <i class=\"glyphicon glyphicon-unchecked\"></i>&nbsp;\n        Make as {{ myUser['status'] === 'active' ? 'Inactive' : 'Active' }} User\n      </button>\n      <button *ngIf=\"membership\" class=\"btn btn-danger btn-sm\" (click)=\"toggleMembership(myParams)\">\n        <i class=\"glyphicon glyphicon-log-in\"></i>&nbsp;{{ membership['status'] ? 'Close' : 'Activate' }} Membership\n      </button>\n      <!--<button class=\"btn btn-primary btn-sm\" (click)=\"openModal(updateTemplate, membership)\">\n        Update Membership\n      </button>-->\n    </div>\n  </div>\n  <hr>\n  <form [formGroup]=\"rForm\" (submit)=\"updatePersonDetails(rForm.value)\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n          <label>Email<span class=\"star-red\">*</span></label>\n          <input type=\"email\" class=\"form-control\" autocomplete=\"off\" autofocus\n                 placeholder=\"Email\" formControlName=\"email\" [email] required />\n        </div>\n        <div class=\"form-group\">\n          <div *ngIf=\"rForm.controls['email'].errors && !rForm.controls['email'].pristine\"\n               class=\"alert-danger alert\">\n            <div [hidden]=\"!rForm.controls['email'].errors.required\">Email is required.</div>\n            <div [hidden]=\"rForm.controls['email'].errors === null && rForm.controls['email'].value\">Email is invalid. </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Mobile number <span class=\"star-red\">*</span> </label>\n          <input type=\"text\" formControlName=\"mobile_number\" placeholder=\"Mobile number\" class=\"form-control\" required />\n        </div>\n        <div class=\"form-group\">\n          <label>First name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\" formControlName=\"first_name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Last name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"last_name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Gender</label>\n          <select class=\"form-control\" name=\"gender\" id=\"gender\" formControlName=\"gender\">\n            <option value=\"{{ item }}\" *ngFor=\"let item of ['male', 'female']\">{{ item }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-md btn-primary\" type=\"submit\">Update</button> &nbsp;&nbsp;\n          <button routerLink=\"/persons\" [queryParams]=\"{max_results: 15, page: 1, sort: 'first_name', status: 'paid_members'}\"\n                  type=\"reset\" class=\"btn btn-md btn-default\">Cancel</button> &nbsp;&nbsp;&nbsp;\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n\n\n\n<ng-template #updateTemplate>\n  <div class=\"modal-header\" *ngIf=\"modalItem\">\n    <h5 class=\"modal-title pull-left\">\n      <b>Title : {{ modalItem['user_id']['first_name'] }} {{ modalItem['user_id']['last_name'] }}</b>\n    </h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"modalItem\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <form [formGroup]=\"updateForm\">\n          <div class=\"form-group\">\n            <label for=\"\">Membership Type</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"membership_type\" name=\"membership_type\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Plan Balance</label>\n            <input type=\"number\" class=\"form-control\" formControlName=\"plan_balance\" name=\"plan_balance\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Status</label>\n            <select name=\"status\" formControlName=\"status\" class=\"form-control\">\n              <option value=\"{{ item['value'] }}\" *ngFor=\"let item of myStatus\">{{ item['text'] }}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Plan Expiry</label>\n            <input type=\"date\" class=\"form-control\" formControlName=\"plan_expiry\" name=\"plan_expiry\">\n          </div>\n          <br>\n          <div class=\"form-group\">\n            <button class=\"btn btn-sm btn-primary\">Update</button>\n            &nbsp;\n            <button class=\"btn btn-sm btn-default\">Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n\n\n\n<ng-template #deleteTemplate>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title pull-left\">Title : {{ modalItem['book_title'] }}</h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h4>Are you sure you want to Delete?</h4>\n        <h6>Book Title: <b>{{ modalItem['book_title'] }}</b></h6>\n        <h6>Created on: {{ modalItem['_created'] | date: 'dd MMMM yyyy' }}</h6>\n        <br>\n        <button class=\"btn btn-sm btn-primary\">Delete Anyway</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/updatepersons/updatepersons.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_service_module_1 = __webpack_require__("../../../../../src/app/shared/app.service.module.ts");
var constant_config_1 = __webpack_require__("../../../../../src/app/config/constant.config.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var UpdatepersonsComponent = /** @class */ (function () {
    function UpdatepersonsComponent(aRoute, appService, authService, router, appUrls, modalService) {
        var _this = this;
        this.aRoute = aRoute;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.appUrls = appUrls;
        this.modalService = modalService;
        this.updateForm = new forms_1.FormGroup({
            membership_type: new forms_1.FormControl('', forms_1.Validators.required),
            plan_balance: new forms_1.FormControl(0, forms_1.Validators.required),
            status: new forms_1.FormControl(true, forms_1.Validators.required),
            plan_expiry: new forms_1.FormControl(null, forms_1.Validators.required)
        });
        this.rForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            first_name: new forms_1.FormControl('', [forms_1.Validators.required]),
            last_name: new forms_1.FormControl('', [forms_1.Validators.required]),
            mobile_number: new forms_1.FormControl('', [forms_1.Validators.required]),
            gender: new forms_1.FormControl('male'),
            status: new forms_1.FormControl('inactive'),
            city: new forms_1.FormControl(''),
            user_level: new forms_1.FormControl('user')
        });
        this.myStatus = [
            { text: 'Active', value: true },
            { text: 'Inactive', value: false }
        ];
        this.aRoute.params.subscribe(function (params) {
            console.log(params);
            _this.myParams = params;
            _this.getUser();
        });
    }
    UpdatepersonsComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template);
        this.modalItem = item;
        this.updateForm.patchValue(item);
    };
    UpdatepersonsComponent.prototype.ngOnInit = function () { };
    UpdatepersonsComponent.prototype.getUser = function () {
        var _this = this;
        var embedded = { embedded: { user_id: 1 } };
        this.appService.get(this.appUrls.users + '/' + this.myParams['_id'], embedded).subscribe(function (data) {
            _this.myUser = data;
            _this.rForm.patchValue(_this.myUser);
            // Get the details of membership
            var where = { user_id: _this.myUser['_id'] };
            _this.appService.get(_this.appUrls.membership, { where: where })
                .subscribe(function (membership) {
                if (membership && membership['_items'].length) {
                    _this.membership = membership._items[0];
                    console.log(membership);
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    UpdatepersonsComponent.prototype.makeInactive = function (params) {
        var _this = this;
        this.myUser['status'] = (this.myUser['status'] === 'active') ? 'inactive' : 'active';
        this.appService.update(this.appUrls.users + '/' + this.myUser['_id'], { status: this.myUser['status'] })
            .subscribe(function (data) {
            var myStatus = (_this.myUser['status'] === 'active') ? 'Active' : 'InActive';
            _this.appService.toast(_this.myUser['first_name'] + ' is now ' + myStatus, 'Success', 's');
        }, function (error) {
            _this.appService.toast('Something went wrong!', 'Error', 'e');
        });
    };
    UpdatepersonsComponent.prototype.toggleMembership = function (params) {
        var _this = this;
        this.membership['status'] = !this.membership['status'];
        this.appService.update(this.appUrls.membership + '/' + this.membership['_id'], { status: this.membership['status'] })
            .subscribe(function (data) {
            var myStatus = (_this.membership['status']) ? 'Activated' : 'Closed';
            _this.appService.toast('Membership is now ' + myStatus, 'Success', 's');
        }, function (error) {
            _this.appService.toast('Something went wrong!', 'Error', 'e');
        });
    };
    UpdatepersonsComponent.prototype.updatePersonDetails = function (personData) {
        var _this = this;
        delete personData['c_password'];
        this.appService.update(this.appUrls.users + '/' + this.myUser['_id'], personData)
            .subscribe(function (data) {
            _this.appService.toast(_this.myUser['first_name'] + ' Updated', 'Success', 's');
        }, function (error) {
            _this.appService.toast('Something went wrong!', 'Error', 'e');
        });
    };
    UpdatepersonsComponent = __decorate([
        core_1.Component({
            selector: 'app-updatepersons',
            template: __webpack_require__("../../../../../src/app/updatepersons/updatepersons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/updatepersons/updatepersons.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            app_service_module_1.AppServiceModule,
            app_service_module_1.AuthService,
            router_1.Router,
            constant_config_1.AppUrls,
            ngx_bootstrap_1.BsModalService])
    ], UpdatepersonsComponent);
    return UpdatepersonsComponent;
}());
exports.UpdatepersonsComponent = UpdatepersonsComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map