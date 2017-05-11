"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
;
/*
  Generated class for the LookService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LookService = (function () {
    function LookService(http) {
        this.http = http;
        console.log('Hello LookService Provider');
    }
    LookService.prototype.getAllcategory = function () {
        return this.http.get("assets/json/allcategory.json")
            .map(function (res) { return res.json().content; });
    };
    LookService.prototype.getGoodsList = function () {
        return this.http.get("assets/json/look_list.json")
            .map(function (res) { return res.json().content; });
    };
    LookService.prototype.getShopCartRecommendList = function () {
        return this.http.get("assets/json/shopcart.json")
            .map(function (res) { return res.json().content; });
    };
    return LookService;
}());
LookService = __decorate([
    core_1.Injectable()
], LookService);
exports.LookService = LookService;
