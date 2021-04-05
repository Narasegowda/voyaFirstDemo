(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-balance-module"],{

/***/ "04ux":
/*!***************************************************!*\
  !*** ./src/app/balance/balance-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BalancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageRoutingModule", function() { return BalancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.component */ "LS2F");




const routes = [
    {
        path: '',
        component: _balance_component__WEBPACK_IMPORTED_MODULE_3__["BalanceComponent"]
    }
];
let BalancePageRoutingModule = class BalancePageRoutingModule {
};
BalancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BalancePageRoutingModule);



/***/ }),

/***/ "4kQc":
/*!************************************************!*\
  !*** ./src/app/balance/balance.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-25 {\n  margin: 25px;\n}\n\n.orange {\n  color: #D75426;\n}\n\n.font-24 {\n  font-size: 24px;\n}\n\n.margin-5 {\n  margin: 5px;\n}\n\n.border-right-light {\n  border-right: 1px solid #00000038;\n}\n\n.center {\n  width: 95%;\n  display: block;\n  margin: auto;\n}\n\n.backColor {\n  background-color: #f5f5f5;\n}\n\n.margin-0 {\n  margin: 0px;\n}\n\n.color-backdiv {\n  background-color: #165b7b;\n  color: white;\n}\n\n.radius-20 {\n  border-radius: 20px;\n}\n\n.margin-left-25 {\n  margin-left: 25px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.width-95 {\n  width: 95%;\n}\n\n.font-12 {\n  font-size: 12px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.color-backdivSecond {\n  background-color: #551b57;\n  color: white;\n}\n\n.darkgb {\n  color: #145A7B;\n}\n\n.bottomTabs {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #00000036;\n}\n\n.w-60 {\n  width: 45%;\n}\n\n.hline {\n  border-top: 1px solid #00000026;\n  width: 112%;\n  margin-left: -6%;\n}\n\n.font-15 {\n  font-size: 15px;\n}\n\n.progress-outer {\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  height: 20px;\n}\n\n.center {\n  display: block;\n  margin: auto;\n}\n\n.progress-inner {\n  min-width: 15%;\n  width: 80%;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  height: 20px;\n  background-color: #d85525;\n}\n\n.percent80 {\n  width: 80%;\n}\n\n.percent70 {\n  width: 70%;\n}\n\n.percent60 {\n  width: 60%;\n}\n\n.percent50 {\n  width: 50%;\n}\n\n.percent40 {\n  width: 40%;\n}\n\n.mb-60 {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxpQ0FBQTtBQUtKOztBQUhBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksaUJBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxVQUFBO0FBYUo7O0FBWEE7RUFDSSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxtQkFBQTtBQWlCSjs7QUFmQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxjQUFBO0FBbUJKOztBQWpCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksVUFBQTtBQXFCSjs7QUFuQkE7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxlQUFBO0FBdUJKOztBQXJCQTtFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdUJKOztBQXJCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBd0JKOztBQXRCQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksVUFBQTtBQTBCSjs7QUF4QkE7RUFDSSxVQUFBO0FBMkJKOztBQXpCQTtFQUNJLFVBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksVUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxVQUFBO0FBOEJKOztBQTVCQTtFQUNJLG1CQUFBO0FBK0JKIiwiZmlsZSI6ImJhbGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLTI1e1xuICAgIG1hcmdpbjogMjVweDtcbn1cbi5vcmFuZ2V7XG4gICAgY29sb3I6ICNENzU0MjY7XG59XG4uZm9udC0yNHtcbiAgICBmb250LXNpemU6MjRweFxufVxuLm1hcmdpbi01e1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmJvcmRlci1yaWdodC1saWdodHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwMzg7XG59XG4uY2VudGVye1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvOyAgIFxufVxuLmJhY2tDb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLm1hcmdpbi0we1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmNvbG9yLWJhY2tkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTY1YjdiO1xuICAgIGNvbG9yOndoaXRlXG59XG4ucmFkaXVzLTIwe1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFyZ2luLWxlZnQtMjV7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4ubWItMTV7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuLndpZHRoLTk1e1xuICAgIHdpZHRoOiA5NSU7XG59XG4uZm9udC0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubWItMTB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYi0we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5tYi0yMHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbG9yLWJhY2tkaXZTZWNvbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCAyNywgODcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrZ2J7XG4gICAgY29sb3I6IzE0NUE3Qjtcbn1cbi5ib3R0b21UYWJze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMzY7XG59XG4udy02MHtcbiAgICB3aWR0aDogNDUlO1xufVxuLmhsaW5le1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMjY7XG4gICAgd2lkdGg6IDExMiU7XG4gICAgbWFyZ2luLWxlZnQ6IC02JTtcbn1cbi5mb250LTE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcm9ncmVzcy1vdXRlciB7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMjBweDtcbn1cbi5jZW50ZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2dyZXNzLWlubmVyIHtcbiAgICBtaW4td2lkdGg6IDE1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODU1MjU7XG59XG4ucGVyY2VudDgwe1xuICAgIHdpZHRoOiA4MCU7XG59XG4ucGVyY2VudDcwe1xuICAgIHdpZHRoOiA3MCU7XG59XG4ucGVyY2VudDYwe1xuICAgIHdpZHRoOiA2MCU7XG59XG4ucGVyY2VudDUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucGVyY2VudDQwe1xuICAgIHdpZHRoOiA0MCU7XG59XG4ubWItNjB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn0iXX0= */");

/***/ }),

/***/ "LS2F":
/*!**********************************************!*\
  !*** ./src/app/balance/balance.component.ts ***!
  \**********************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_balance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./balance.component.html */ "TEHZ");
/* harmony import */ var _balance_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance.component.scss */ "4kQc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import { FormGroup } from '@angular/forms';
const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let BalanceComponent = class BalanceComponent {
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
        this.cookieService.set("currentTab", "balance");
    }
    newBrowser() {
        window.open('https://voya.com', '_system', 'location=yes');
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    withinApp() {
        Browser.open({
            url: "https://www.voya.com",
            windowName: "_system"
        });
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    tabedHome() {
        this.router.navigateByUrl("/home");
    }
    tabedBalance() {
        this.router.navigateByUrl("/balance");
    }
};
BalanceComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
BalanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: _raw_loader_balance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balance_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BalanceComponent);



/***/ }),

/***/ "TEHZ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/balance/balance.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"height-100 backColor\">\n\n    <div class=\"v-mobile-navigation-container__wrapper\">\n      <v-mobile-navigation-container logoHref=\"/vds\"\n        logoSrc=\"https://purepng.com/public/uploads/large/purepng.com-voya-financial-logologobrand-logoiconslogos-251519938224xbtfv.png\">\n        <v-drilldown-menu class=\"\">\n          <v-drilldown-menu-page staticSearch id=\"main\" level=\"0\" searchResult=\"{}\" searchLink=\"/\">\n            <v-drilldown-menu-button to=\"retirement-accounts\">\n              My Retirement Accounts\n            </v-drilldown-menu-button>\n            <v-drilldown-menu-button to=\"financial-wellness\" selected>\n              Financial Wellness\n            </v-drilldown-menu-button>\n            <v-drilldown-menu-link href=\"/\">\n              Get Professional Advice\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link (click)=\"newBrowser()\">My Profile</v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">My Messages\n            </v-drilldown-menu-link>\n\n            <div slot=\"popularLinks\">\n              Popular Pages:\n              <span style=\"text-decoration:underline;color:#145A7B;\">Beneficiaries</span><span>&nbsp; ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Getting Your Money</span><span>&nbsp;\n                ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Forgot PIN</span><span>&nbsp; ,&nbsp;\n              </span><span style=\"text-decoration:underline;color:#145A7B;\">Get Investment Advice</span>\n            </div>\n          </v-drilldown-menu-page>\n\n          <v-drilldown-menu-page breadcrumbText=\"My Retirement Accounts\" from=\"main\" id=\"retirement-accounts\" level=\"1\"\n            title=\"My Retirement Accounts\" blockTitleTranslation blockBreadcrumbTranslation>\n            <v-drilldown-menu-link  (click)=\"withinApp()\">\n              Account 1\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link  (click)=\"tabedBalance()\" selected>\n              Account 2\n            </v-drilldown-menu-link>\n          </v-drilldown-menu-page>\n\n          <v-drilldown-menu-page breadcrumbText=\"Main Menu\" from=\"main\" id=\"financial-wellness\" level=\"1\"\n            title=\"Financial Wellness\">\n            <v-drilldown-menu-link href=\"/\">\n              My Resource Center\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\" selected>\n              Financial Wellness Assessment\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Life Stage Guidance\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Calculators & Tools\n            </v-drilldown-menu-link>\n            <v-drilldown-menu-link href=\"/\">\n              Personal Finance Management\n            </v-drilldown-menu-link>\n          </v-drilldown-menu-page>\n        </v-drilldown-menu>\n\n        <v-mobile-navigation-footer class=\"\">\n          <v-icon linkButton name=\"commentdots\"> Contact US </v-icon>\n          <v-icon linkButton name=\"globeamericas\"> Ver en Español </v-icon>\n          <v-icon linkButton name=\"profile\"> Sign Out </v-icon>\n        </v-mobile-navigation-footer>\n      </v-mobile-navigation-container>\n    </div>\n\n    <ion-row>\n\n    </ion-row>\n    <ion-row class=\"margin-25\">\n      <ion-col class=\"ion-text-start\">\n        <p class=\"mb-0\">Employer’s Savings Plan </p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"margin-left-25\">\n      <ion-col>\n        <p class=\"bold orange font-24\">Balance Summary</p>\n      </ion-col>\n    </ion-row>\n\n\n    <v-card class=\"center\">\n      <p class=\"mb-10\">Current Balance*</p>\n      <ion-row>\n        <p class=\"font-24 darkgb mb-10\">$35,000.00</p>\n      </ion-row>\n      <p class=\"font-12 mb-0\">as of Mar 22, 2021</p>\n      <p class=\"font-12 mb-15\">*Does not include Loan Balance</p>\n\n      <ion-row class=\"hline\">\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"mb-10\">Personal Rate of Return YTD</p>\n          <p class=\"orange bold font-24\">15.62%</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"hline\">\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"mb-10 font-15\">Loan Payment</p>\n          <p class=\"orange font-24 bold margin-0\">$327.85</p>\n        </ion-col>\n        <ion-col>\n          <p class=\"mb-10 font-15\">Next Due Date</p>\n          <p class=\" margin-0\">01/13/21</p>\n        </ion-col>\n        <ion-col>\n          <p class=\"mb-10 font-15\">Payoff Amount</p>\n          <p class=\" margin-0 \">$12,829.92</p>\n        </ion-col>\n      </ion-row>\n    </v-card>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"margin-25 mb-15\">Balance History</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"margin-left-25\">\n      <ion-col size=\"2\" class=\"ion-text-start\">\n        <p class=\"mb-0\">Latest</p>\n      </ion-col>\n      <ion-col size=\"9.5\" class=\"center\">\n        <div class=\"progress-outer\">\n          <div class=\"progress-inner percent80\"></div>\n      </div>\n      <p class=\"mb-15\">$35,000.00</p>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"margin-left-25\">\n      <ion-col size=\"2\" class=\"ion-text-start\">\n        <p class=\"mb-0\">2020</p>\n      </ion-col>\n      <ion-col size=\"9.5\" class=\"center\">\n        <div class=\"progress-outer\">\n          <div class=\"progress-inner percent70\"></div>\n      </div>\n      <p class=\"mb-15\">$34,092.33</p>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"margin-left-25\">\n      <ion-col size=\"2\" class=\"ion-text-start\">\n        <p class=\"mb-0\">2019</p>\n      </ion-col>\n      <ion-col size=\"9.5\" class=\"center\">\n        <div class=\"progress-outer\">\n          <div class=\"progress-inner percent60\"></div>\n      </div>\n      <p class=\"mb-15\">$30,466.00</p>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"margin-left-25\">\n      <ion-col size=\"2\" class=\"ion-text-start\">\n        <p class=\"mb-0\">2018</p>\n      </ion-col>\n      <ion-col size=\"9.5\" class=\"center\">\n        <div class=\"progress-outer\">\n          <div class=\"progress-inner percent50\"></div>\n      </div>\n      <p class=\"mb-15\">$18,127.91</p>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"margin-left-25 mb-60\">\n      <ion-col size=\"2\" class=\"ion-text-start\">\n        <p class=\"mb-0\">2017</p>\n      </ion-col>\n      <ion-col size=\"9.5\" class=\"center\">\n        <div class=\"progress-outer\">\n          <div class=\"progress-inner percent40\"></div>\n      </div>\n      <p>$10,098.27</p>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"ion-text-center font-12 bottomTabs\">\n      <ion-col>\n        <img class=\"w-60\" (click)=\"tabedHome()\" src=\"../../assets/icon/u735.png\"/>\n        <p class=\"mb-0\">Home</p>\n      </ion-col>\n      <ion-col>\n        <img class=\"w-60\" (click)=\"tabedBalance()\" src=\"../../assets/icon/u746.png\"/>\n        <p class=\"mb-0\">Balances</p>\n      </ion-col>\n      <ion-col>\n        <img class=\"w-60\" src=\"../../assets/icon/u759.png\"/>\n        <p class=\"mb-0\">Contributions</p>\n      </ion-col>\n      <ion-col>\n        <img class=\"w-60\" src=\"../../assets/icon/u770.png\"/>\n        <p class=\"mb-0\">Investments</p>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "cyjo":
/*!*******************************************!*\
  !*** ./src/app/balance/balance.module.ts ***!
  \*******************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _balance_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance-routing.module */ "04ux");
/* harmony import */ var _balance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balance.component */ "LS2F");








let BalancePageModule = class BalancePageModule {
};
BalancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _balance_routing_module__WEBPACK_IMPORTED_MODULE_6__["BalancePageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
        ],
        declarations: [_balance_component__WEBPACK_IMPORTED_MODULE_7__["BalanceComponent"]]
    })
], BalancePageModule);



/***/ })

}]);
//# sourceMappingURL=balance-balance-module.js.map