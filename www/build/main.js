webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MedicoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MedicoPage = (function () {
    function MedicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MedicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicoPage');
    };
    return MedicoPage;
}());
MedicoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-medico',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/medico/medico.html"*/'<!--\n  Generated template for the MedicoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Médico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid> \n    <ion-row>\n      <ion-col col-4><img src="assets/gato.png"></ion-col>\n      <ion-col col-8> <h5> Nome do médico </h5>\n      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum enim vel lectus auctor laoreet.</p> </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-grid> <h5> Horários do Médico </h5>\n\n        <ion-item>\n            <ion-label>Data da Consulta:</ion-label>\n            <ion-datetime displayFormat="D MMM YYYY" min="2017-08" max="2018-10" [(ngModel)]="dataconsulta" cancelText="CANCELAR" \n            doneText="CONFIRMAR">\n             ></ion-datetime>\n          </ion-item><br />\n          \n        <ion-row>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>8:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>8:30</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>9:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario vermelho" round>9:30</button></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>10:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>10:30</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>11:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>11:30</button></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>14:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>14:30</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>15:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>15:30</button></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>16:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>16:30</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>17:00</button></ion-col>\n            <ion-col col-3><button ion-button class="button btn-horario verde" round>17:30</button></ion-col>\n        </ion-row>\n    </ion-grid>\n    <p>Os horários em <span class="fonteverde">verde</span> estão disponíveis para agendamento, enquanto os\n  <span class="fontevermelha"> vermelhos </span> estão indisponíveis.</p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/medico/medico.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MedicoPage);

//# sourceMappingURL=medico.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeudoutorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__medico_medico__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MeudoutorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MeudoutorPage = (function () {
    function MeudoutorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicoPage = __WEBPACK_IMPORTED_MODULE_0__medico_medico__["a" /* MedicoPage */];
    }
    MeudoutorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeudoutorPage');
    };
    return MeudoutorPage;
}());
MeudoutorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-meudoutor',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/meudoutor/meudoutor.html"*/'<!--\n  Generated template for the MeudoutorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meu Doutor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider color="light">Angiologista</ion-item-divider>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>Médico 1</h2>\n                <p>Cardiologista</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/gato.png">\n                  </ion-thumbnail>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n                  <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="light">Oftalmologista</ion-item-divider>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>Médico</h2>\n                <p>Cardiologista</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>My Neighbor Totoro</h2>\n                <p>Hayao Miyazaki • 1988</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/gato.png">\n            </ion-thumbnail>\n             <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end [navPush]="medicoPage">View</button>            </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n          <ion-item-divider color="light">Nutricionista</ion-item-divider>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/gato.png">\n                  </ion-thumbnail>\n                  <h2>Médico</h2>\n                  <p>Cardiologista</p>\n                  <button ion-button clear item-end [navPush]="medicoPage">View</button>\n            </ion-item>\n        </ion-item-group>\n\n        <ion-item-group>\n            <ion-item-divider color="light">Fisioterapeuta</ion-item-divider>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="assets/gato.png">\n                    </ion-thumbnail>\n                    <h2>Médico</h2>\n                    <p>Cardiologista</p>\n                    <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="assets/gato.png">\n                    </ion-thumbnail>\n                    <h2>My Neighbor Totoro</h2>\n                    <p>Hayao Miyazaki • 1988</p>\n                    <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              </ion-item-group>\n\n          <ion-item-group>\n              <ion-item-divider color="light">Clínico Geral</ion-item-divider>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="assets/gato.png">\n                      </ion-thumbnail>\n                      <h2>Médico</h2>\n                      <p>Cardiologista</p>\n                      <button ion-button clear item-end [navPush]="medicoPage">View</button>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="assets/gato.png">\n                      </ion-thumbnail>\n                      <h2>My Neighbor Totoro</h2>\n                      <p>Hayao Miyazaki • 1988</p>\n                      <button ion-button clear item-end [navPush]="medicoPage">View</button>\n                </ion-item>\n            </ion-item-group>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/meudoutor/meudoutor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], MeudoutorPage);

//# sourceMappingURL=meudoutor.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgendamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AgendamentoPage = (function () {
    function AgendamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgendamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendamentoPage');
    };
    return AgendamentoPage;
}());
AgendamentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agendamento',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/agendamento/agendamento.html"*/'<!--\n  Generated template for the AgendamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agendamento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label>Data da Consulta:</ion-label>\n        <ion-datetime displayFormat="D MMM YYYY" min="2017-08" max="2018-10" [(ngModel)]="dataconsulta"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Horário da consulta:</ion-label>\n          <ion-datetime displayFormat="hh:mm A" [(ngModel)]="hrconsulta"></ion-datetime>\n        </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/agendamento/agendamento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AgendamentoPage);

//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendamento/agendamento.module": [
		269,
		3
	],
	"../pages/medico/medico.module": [
		267,
		2
	],
	"../pages/meudoutor/meudoutor.module": [
		268,
		1
	],
	"../pages/slides/slides.module": [
		266,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_slides_slides__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_medico_medico__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_meudoutor_meudoutor__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agendamento_agendamento__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_medico_medico__["a" /* MedicoPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_slides_slides__["a" /* SlidesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/medico/medico.module#MedicoPageModule', name: 'MedicoPage', segment: 'medico', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meudoutor/meudoutor.module#MeudoutorPageModule', name: 'MeudoutorPage', segment: 'meudoutor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agendamento/agendamento.module#AgendamentoPageModule', name: 'AgendamentoPage', segment: 'agendamento', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_medico_medico__["a" /* MedicoPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_slides_slides__["a" /* SlidesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_slides_slides__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_meudoutor_meudoutor__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_agendamento_agendamento__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_slides_slides__["a" /* SlidesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] },
            { title: 'Agendamento', component: __WEBPACK_IMPORTED_MODULE_2__pages_agendamento_agendamento__["a" /* AgendamentoPage */] },
            { title: 'Meu Doutor', component: __WEBPACK_IMPORTED_MODULE_1__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.teste = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="assets/logo.png"/>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle (click)="teste()">Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidesPage');
    };
    return SlidesPage;
}());
SlidesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slides',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/Doutor/src/pages/slides/slides.html"*/'<!--\n  Generated template for the SlidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>slides</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides">\n          <ion-toolbar>\n            <ion-buttons end>\n              <button ion-button color="primary" [navPush]="homePage">Skip</button>\n            </ion-buttons>\n          </ion-toolbar>\n          <img [src]="slide.image" class="slide-image"/>\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          <p [innerHTML]="slide.description"></p>\n        </ion-slide>\n        <ion-slide>\n          <ion-toolbar>\n          </ion-toolbar>\n          <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n          <h2 class="slide-title">Ready to Play?</h2>\n          <button ion-button large clear icon-end color="primary">\n            Continue\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/Doutor/src/pages/slides/slides.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SlidesPage);

//# sourceMappingURL=slides.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map