(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "vtpD");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "ZTFi":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backColor {\n  background-color: #f5f5f5;\n}\n\n.voyaImage {\n  width: 55%;\n  margin: auto;\n  display: block;\n  margin-top: 13vw;\n}\n\n.sm-85 {\n  width: 93%;\n  margin: auto;\n  padding: 0px;\n  border-radius: 8%;\n}\n\n.border-none {\n  border: none;\n  --inner-border-width: 0;\n}\n\n.height-100 {\n  height: 100%;\n}\n\n.padding-6 {\n  padding: 6% !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #cecaca;\n}\n\n.margin-top-6vh {\n  margin-top: 6vh;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.padding-0 {\n  padding: 0px;\n}\n\n.orange {\n  color: orange;\n}\n\n.font-14 {\n  font-size: 14px;\n}\n\n.b-radius {\n  border-radius: 12vw;\n}\n\nion-toggle {\n  --background-checked: rgba(20, 90, 123, 1);\n}\n\nion-toggle.toggle-checked {\n  --background: #ffffff;\n  --background-checked: rgba(20, 90, 123, 1);\n  --handle-background: #7a49a5;\n  --handle-background-checked: #ffffff;\n}\n\n.ion-color-btnbackcolor {\n  --ion-color-btnbackcolor:#145a7b;\n  background: var(--ion-color-btnbackcolor);\n}\n\n.ion-color-white {\n  --ion-color-white:#ffffff;\n  --ion-color-black:#145a7b;\n  background: var(--ion-color-white);\n  color: var(--ion-color-black);\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.font-size-10 {\n  font-size: 10px;\n}\n\n.border-color {\n  border: 1px solid;\n  border-radius: 12vw;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxzQkFBQTtBQU1KOztBQUpBO0VBQ0ksZ0NBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7QUFXSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0FBWUo7O0FBVkE7RUFFSSwwQ0FBQTtBQVlKOztBQVBBO0VBQ0kscUJBQUE7RUFDQSwwQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUFTSjs7QUFQQTtFQUNJLGdDQUFBO0VBQ0EseUNBQUE7QUFVSjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksMEJBQUE7QUFnQkoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0NvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4udm95YUltYWdle1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEzdnc7XG59XG4uc20tODV7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDglO1xufVxuLmJvcmRlci1ub25le1xuICAgIGJvcmRlcjpub25lO1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuLmhlaWdodC0xMDB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnBhZGRpbmctNntcbiAgICBwYWRkaW5nOiA2JSAhaW1wb3J0YW50O1xufVxuLmJvcmRlci1ib3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNhY2E7XG59XG4ubWFyZ2luLXRvcC02dmh7XG4gICAgbWFyZ2luLXRvcDo2dmg7XG59XG4ubS1hdXRve1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5wYWRkaW5nLTB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLm9yYW5nZXtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4uZm9udC0xNHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uYi1yYWRpdXN7XG4gICAgYm9yZGVyLXJhZGl1czogMTJ2dztcbn1cbmlvbi10b2dnbGUge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICBcbiAgICAvLyAtLWhhbmRsZS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgICAvLyAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xufVxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzdhNDlhNTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIH1cbi5pb24tY29sb3ItYnRuYmFja2NvbG9yIHtcbiAgICAtLWlvbi1jb2xvci1idG5iYWNrY29sb3I6IzE0NWE3YjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYmFja2NvbG9yKTtcbn1cbi5pb24tY29sb3Itd2hpdGUge1xuICAgIC0taW9uLWNvbG9yLXdoaXRlOiNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYmxhY2s6IzE0NWE3YjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xufVxuLm0tMjB7XG4gICAgbWFyZ2luOjIwcHg7XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvbnQtc2l6ZS0xMHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uYm9yZGVyLWNvbG9ye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEydnc7XG59XG4udGV4dC11bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */");

/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "vtpD");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"height-100 backColor\">\n    <ion-row>\n      <ion-col>\n        <img class=\"voyaImage\"\n          src=\"https://purepng.com/public/uploads/large/purepng.com-voya-financial-logologobrand-logoiconslogos-251519938224xbtfv.png\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"margin-top-6vh\">\n      <ion-col>\n\n        <ion-list class=\"sm-85\">\n          \n          <ion-row class=\"border-bottom\">\n            <ion-col size=\"10\">\n              <ion-input class=\"padding-6\" type=\"text\" placeholder=\"Username\"></ion-input>\n            </ion-col>\n            <ion-col size=\"2\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"border-none\">\n            <ion-col size=\"10\">\n              <ion-input class=\"padding-6\" type=\"password\" placeholder=\"Password\"></ion-input>\n            </ion-col>\n            <ion-col size=\"2\" class=\"m-auto \">\n              <ion-icon name=\"eye-sharp\" class=\"orange\" size=\"large\"></ion-icon>\n            </ion-col>\n          </ion-row>\n         \n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"m-auto sm-85 m-20\">\n\n      <ion-col size=\"6\">\n        <ion-row  size=\"12\">\n          <ion-col size=\"4\" class=\"padding-0 m-auto\">\n            <ion-toggle></ion-toggle>\n          </ion-col>\n          <ion-col size=\"8\" class=\"padding-0 m-auto\">\n            <span class=\"font-14\">Remember Me</span>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-toggle color=\"primary\"></ion-toggle><span></span>\n      </ion-col> -->\n\n      <ion-col size=\"6\">\n        <ion-row  size=\"12\">\n          <ion-col size=\"4\" class=\"padding-0 m-auto\">\n            <ion-toggle></ion-toggle>\n          </ion-col>\n          <ion-col size=\"8\" class=\"padding-0 m-auto\">\n            <span class=\"font-14\">Touch/Face ID</span>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row class=\"margin-top-6vh\"></ion-row>\n\n\n    <ion-row class=\"m-auto m-20\">\n      <ion-col size=\"2\">\n        <!-- <ion-button expand=\"block\">Block Button</ion-button> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <v-button (click)=\"openPage()\" primary>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log In&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-button>\n      </ion-col>\n      <ion-col size=\"2\">\n        <!-- <ion-button expand=\"block\">Block Button</ion-button> -->\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col ><p class=\"text-center\"><a class=\"text-underline\">Forgot Username/Password?</a></p></ion-col>\n    </ion-row>\n\n    <ion-row class=\"sm-85\">\n      <ion-col size=\"6\"><p class=\"text-center\">First time user?</p></ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"white\" class=\"b-radius border-color\" expand=\"block\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"font-size-10 m-20\">\n      <p class=\"m-auto\"> Version 4.12</p>\n      <p class=\"m-auto\">© 2019, Voya All Rights Reserved.</p>\n      <p class=\"m-auto\">Voya and Voya logo are registered trademarks of Voya Services Company</p>\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "ZTFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import { FormGroup } from '@angular/forms';
const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let LoginComponent = class LoginComponent {
    //credentialForm: FormGroup;
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    ngOnInit() {
        this.cookieService.set("currentTab", "login");
    }
    vdsPage() {
        this.router.navigateByUrl("/vds");
    }
    openPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigateByUrl("/home");
            // console.log(this.credentialForm.value)
            // this.cookieService.set( 'username', this.credentialForm.value.email);
            // this.cookieService.set( 'password', this.credentialForm.value.password );
            // console.log(this.cookieService.getAll())
            // await Browser.open({ url: 'http://192.168.43.142:8100/home?username='+this.cookieService.get('username')+'&password='+this.cookieService.get('password'),toolbarColor:'#f4dc41' });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map