(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import { FormGroup } from '@angular/forms';
const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let HomeComponent = class HomeComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        Browser.addListener(`browserPageLoaded`, () => {
            console.log('browser event called');
        });
        Browser.addListener(`browserFinished`, () => {
            console.log('browser event finished');
        });
        Browser.prefetch({
            urls: ['https://www.voya.com']
        });
    }
    ngOnInit() {
        this.cookieService.set("currentTab", "home");
    }
    newBrowser() {
        window.open('https://voya.com', '_system', 'location=yes');
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    withinApp() {
        Browser.open({
            url: "https://www.voya.com",
            windowName: "_system",
            toolbarColor: "#D75426"
        });
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    tabedBalance() {
        this.router.navigateByUrl("/balance");
    }
};
HomeComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"height-100 backColor\">\n\n    <div class=\"v-mobile-navigation-container__wrapper\">\n      <v-mobile-navigation-container logoHref=\"/vds\"\n        logoSrc=\"https://purepng.com/public/uploads/large/purepng.com-voya-financial-logologobrand-logoiconslogos-251519938224xbtfv.png\">\n        <v-drilldown-menu class=\"\">\n          <v-drilldown-menu-page staticSearch id=\"main\" level=\"0\" searchResult=\"{}\" searchLink=\"/\">\n            <v-drilldown-menu-button to=\"retirement-accounts\">\n              My Retirement Accounts\n            </v-drilldown-menu-button>\n            <v-drilldown-menu-button to=\"financial-wellness\">\n              Financial Wellness\n            </v-drilldown-menu-button>\n            <v-drilldown-menu-link href=\"/\">\n              Get Professional Advice\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link (click)=\"newBrowser()\">My Profile</v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">My Messages\n            </v-drilldown-menu-link>\n\n            <div slot=\"popularLinks\">\n              Popular Pages:\n              <span style=\"text-decoration:underline;color:#145A7B;\">Beneficiaries</span><span>&nbsp; ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Getting Your Money</span><span>&nbsp;\n                ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Forgot PIN</span><span>&nbsp; ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Get Investment Advice</span>\n            </div>\n          </v-drilldown-menu-page>\n\n          <v-drilldown-menu-page breadcrumbText=\"My Retirement Accounts\" from=\"main\" id=\"retirement-accounts\" level=\"1\"\n            title=\"My Retirement Accounts\" blockTitleTranslation blockBreadcrumbTranslation>\n            <v-drilldown-menu-link  (click)=\"withinApp()\">\n              My Employer 401k Account (In App Browser)\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link>\n              Employer Savings Account\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link>\n              YRC Savings Account\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link>\n              Non Qualified Savings Plan\n            </v-drilldown-menu-link>\n\n          </v-drilldown-menu-page>\n\n          <v-drilldown-menu-page breadcrumbText=\"Main Menu\" from=\"main\" id=\"financial-wellness\" level=\"1\"\n            title=\"Financial Wellness\">\n            <v-drilldown-menu-link href=\"/\">\n              My Resource Center\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Financial Wellness Assessment\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Life Stage Guidance\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Calculators & Tools\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Personal Finance Management\n            </v-drilldown-menu-link>\n          </v-drilldown-menu-page>\n        </v-drilldown-menu>\n\n        <v-mobile-navigation-footer class=\"\">\n          <v-icon linkButton name=\"commentdots\"> Contact US </v-icon>\n          <v-icon linkButton name=\"globeamericas\"> Ver en Español </v-icon>\n          <v-icon linkButton name=\"profile\"> Sign Out </v-icon>\n        </v-mobile-navigation-footer>\n      </v-mobile-navigation-container>\n    </div>\n\n    <ion-row>\n\n    </ion-row>\n    <ion-row class=\"margin-25\">\n      <ion-col class=\"ion-text-center\">\n        <p class=\"margin-0\">Total Balance </p>\n      </ion-col>\n      <ion-col>\n        <p class=\"margin-0 orange font-24 bold\">$40,827.95</p>\n      </ion-col>\n    </ion-row>\n\n\n    <v-card class=\"center pb-20\">\n      <p>My Estimated Monthly</p>\n      <ion-row class=\"mb-20\">\n        <ion-col class=\"ion-text-center border-right-light\">\n          <p class=\"margin-5 bold orange font-24\">$4,279</p>\n          <p class=\"margin-5\">Income</p>\n        </ion-col>\n        <ion-col class=\"ion-text-center border-right-light\">\n          <p class=\"margin-5 bold font-24\">$4,768</p>\n          <p class=\"margin-5\">Goal</p>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n          <p class=\"margin-5 bold font-24\">$489</p>\n          <p class=\"margin-5\">Gap</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"mb-10\">\n        <ion-col size=\"2\">\n          <img src=\"../../assets/icon/u2796.png\"/>\n        </ion-col>\n        <ion-col size=\"10\" class=\"center\">\n          <div class=\"progress-outer\">\n            <div class=\"progress-inner\"></div>\n        </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <p class=\"linkcolor mb-10 text-underline\">Make Changes</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"hline\">\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <p class=\"linkcolor margin-0 text-underline\">See detailed estimate</p>\n        </ion-col>\n      </ion-row>\n      \n    </v-card>\n\n    \n    <ion-row class=\"margin-25\">\n      <ion-col size=\"0.1\">\n        \n      </ion-col>\n      <ion-col size=\"11.9\">\n        <p class=\"mb-10\">My Accounts</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"color-backdiv radius-20 width-95\">\n      \n      <ion-row>\n        <ion-col size=\"0.5\"></ion-col>\n        <ion-col size=\"11.5\">\n          <p class=\"mb-15\">Employer's Savings Plan</p>\n        </ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col size=\"0.5\"></ion-col>\n        <ion-col size=\"7.5\">\n          <p class=\"margin-0 font-24\">$35,000.00</p>\n          <p class=\"mb-10 font-12\">As of Mar 22, 2021</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <v-button (click)=\"tabedBalance()\" secondary>View</v-button>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n\n    <ion-row class=\"mb-20\"></ion-row>\n\n    <ion-grid class=\"color-backdivSecond radius-20 width-95\">\n      \n      <ion-row>\n        <ion-col size=\"0.5\"></ion-col>\n        <ion-col size=\"11.5\">\n          <p class=\"mb-15\">Employer's Savings Plan</p>\n        </ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col size=\"0.5\"></ion-col>\n        <ion-col size=\"7.5\">\n          <p class=\"margin-0 font-24\">$35,000.00</p>\n          <p class=\"mb-10 font-12\">As of Mar 22, 2021</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <v-button (click)=\"tabedBalance()\" secondary>View</v-button>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-25 {\n  margin: 25px;\n}\n\n.orange {\n  color: #D75426;\n}\n\n.font-24 {\n  font-size: 24px;\n}\n\n.margin-5 {\n  margin: 5px;\n}\n\n.border-right-light {\n  border-right: 1px solid #00000038;\n}\n\n.center {\n  width: 95%;\n  display: block;\n  margin: auto;\n}\n\n.backColor {\n  background-color: #f5f5f5;\n}\n\n.margin-0 {\n  margin: 0px;\n}\n\n.color-backdiv {\n  background-color: #165b7b;\n  color: white;\n}\n\n.radius-20 {\n  border-radius: 20px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.width-95 {\n  width: 95%;\n}\n\n.font-12 {\n  font-size: 12px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.color-backdivSecond {\n  background-color: #551b57;\n  color: white;\n}\n\n.progress-outer {\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n  height: 20px;\n}\n\n.center {\n  display: block;\n  margin: auto;\n}\n\n.progress-inner {\n  min-width: 15%;\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  height: 20px;\n  background-color: #d85525;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\n.hline {\n  border-top: 1px solid #00000026;\n  width: 112%;\n  margin-left: -6%;\n}\n\n.pb-20 {\n  padding-bottom: 20px;\n}\n\n.linkcolor {\n  color: #145A7B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxpQ0FBQTtBQUtKOztBQUhBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7QUFVSjs7QUFSQTtFQUNJLFVBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtBQWNKOztBQVpBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBZUo7O0FBYkE7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBZUo7O0FBYkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWlCSjs7QUFmQTtFQUNJLDBCQUFBO0FBa0JKOztBQWhCQTtFQUNJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbUJKOztBQWpCQTtFQUNJLG9CQUFBO0FBb0JKOztBQWxCQTtFQUNJLGNBQUE7QUFxQkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tMjV7XG4gICAgbWFyZ2luOiAyNXB4O1xufVxuLm9yYW5nZXtcbiAgICBjb2xvcjogI0Q3NTQyNjtcbn1cbi5mb250LTI0e1xuICAgIGZvbnQtc2l6ZToyNHB4XG59XG4ubWFyZ2luLTV7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uYm9yZGVyLXJpZ2h0LWxpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDAzODtcbn1cbi5jZW50ZXJ7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87ICAgXG59XG4uYmFja0NvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5tYXJnaW4tMHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5jb2xvci1iYWNrZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IzE2NWI3YjtcbiAgICBjb2xvcjp3aGl0ZVxufVxuLnJhZGl1cy0yMHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm1iLTE1e1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cbi53aWR0aC05NXtcbiAgICB3aWR0aDogOTUlO1xufVxuLmZvbnQtMTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1iLTEwe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWItMjB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb2xvci1iYWNrZGl2U2Vjb25ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgMjcsIDg3KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ucHJvZ3Jlc3Mtb3V0ZXIge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbi5jZW50ZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2dyZXNzLWlubmVyIHtcbiAgICBtaW4td2lkdGg6IDE1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NTUyNTtcbn1cbi50ZXh0LXVuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5obGluZXtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDI2O1xuICAgIHdpZHRoOiAxMTIlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNiU7XG59XG4ucGItMjB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubGlua2NvbG9ye1xuICAgIGNvbG9yOiMxNDVBN0I7XG59Il19 */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "9vUh");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
        ],
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map